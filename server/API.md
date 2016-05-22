# eTourney REST API Documentation

## **1. Authentication**
----
###**Login**

  Authenticates user. Returns access_token and JSON data about the user.

* **URL**

  /auth/login

* **Method:**

  `POST`

*  **URL Params**

   None

* **Data Params**

  **Required:**

  `email`: string

  `password`: string

* **Success Response:**

  * **Code:** 200 SUCCESS<br />
    **Content:**
    ```javascript
    {
      success : true,
      email : "kevin@etourney.com" ,
      access_token: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtAZ21haWwuY29tIiwiaWF0IjoxNDYzOTQ5MTgyLCJleHAiOjE0NjkxMzMxODJ9.TzgrUPJ64qXufZpLJ8YIyAIUSPMmohH2gOZLas-knzc",
    }
    ```
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ success: false, msg: "Please enter your email and password." }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ success: false, msg: "Authentication failed. User not found." }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ success: false, msg: "Authentication failed. Passwords did not match." }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ success: false, msg: _mongodb query error_ }` <br />
    **Note**: Such as unique email and password length errors.


* **Sample Call:**

  ```javascript
    axios({
      method: 'post',
      url: `/auth/login`,
      data: {
        email: "kevin@etourney.com"
        password: "password",
      }
    });
  ```

<br/>

  ###**Register**

  Sign up new user. Returns access_token and JSON data about the new user.

  * **URL**

    /auth/register

  * **Method:**

    `POST`

  *  **URL Params**

     None

  * **Data Params**

    **Required:**

    `email`: string

    `password`: string

  * **Success Response:**

    * **Code:** 201 CREATED<br />
      **Content:**
      ```javascript
      {
        success : true,
        email : "kevin@etourney.com" ,
        access_token: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtAZ21haWwuY29tIiwiaWF0IjoxNDYzOTQ5MTgyLCJleHAiOjE0NjkxMzMxODJ9.TzgrUPJ64qXufZpLJ8YIyAIUSPMmohH2gOZLas-knzc",
      }
      ```
  * **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{ success: false, msg: "Please enter your email and password." }`

    OR

    * **Code:** 403 FORBIDDEN <br />
      **Content:** `{ success: false, msg: _mongodb query error_ }` <br />
      **Note**: Such as unique email and password length errors.


  * **Sample Call:**

    ```javascript
      axios({
        method: 'post',
        url: `/auth/register`,
        data: {
          email: "kevin@etourney.com"
          password: "password",
        }
      });
    ```
<br />

## **2. Tournament**
----
###**Create Tournament**

  Create new tournament. Returns JSON data about the new tournament.

* **URL**

  /api/tournament

* **Method:**

  `POST`

*  **Header**

   **Required:**

   `[Authorization]`: string (JWT)

*  **URL Params**

   None

* **Data Params**

  **Required:**

  `tournamentName`: string

  `game`: string

* **Success Response:**

  * **Code:** 201 CREATED<br />
    **Content:**
    ```javascript
    {
      "success": true,
      "tournament": {
        "_id": "573d36d680935d590f6a5821",
        "tournamentName": "myTournament",
        "game": "HearthStone",
        "creatorEmail": "k@gmail.com",
        "__v": 0,
        "created": "2016-05-19T03:45:26.229Z"
      }
    }
    ```
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ success: false, msg: "Please enter your tournament name" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ success: false, msg: "Please enter your choice of game" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ success: false, msg: _mongodb query error_ }` <br />
    **Note**: Such as unique tournament name error.


* **Sample Call:**

  ```javascript
    axios({
      method: 'post',
      header:  {'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtAZ21haWwuY29tIiwiaWF0IjoxNDYzOTQ5MTgyLCJleHAiOjE0NjkxMzMxODJ9.TzgrUPJ64qXufZpLJ8YIyAIUSPMmohH2gOZLas-knzc'},
      url: `/api/tournament`,
      data: {
        tournamentName: "myTournament"
        game: "LeagueOfLegend",
      }
    });
  ```
<br />

###**Find Tournament by ID**

  Find existing tournament information. Returns JSON data about the tournament.

* **URL**

  /api/tournament/`:tournamentID`

* **Method:**

  `GET`

*  **Header**

   **Required:**

   `[Authorization]`: string (JWT)

*  **URL Params**

   **Required:**

   `:tournamentID`: string

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 CREATED<br />
    **Content:**
    ```javascript
    {
      "success": true,
      "tournament": {
        "_id": "573d36d680935d590f6a5821",
        "tournamentName": "myTournament",
        "game": "HearthStone",
        "creatorEmail": "k@gmail.com",
        "__v": 0,
        "created": "2016-05-19T03:45:26.229Z"
      }
    }
    ```
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ success: false, msg: "Please enter your tournament name" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ success: false, msg: "Please enter your choice of game" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ success: false, msg: _mongodb query error_ }` <br />
    **Note**: Such as unique tournament name error.

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `Unauthorized` <br />
    **Note**: If JWT authentication failed.

* **Sample Call:**

  ```javascript
    axios({
      method: 'post',
      header:  {'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtAZ21haWwuY29tIiwiaWF0IjoxNDYzOTQ5MTgyLCJleHAiOjE0NjkxMzMxODJ9.TzgrUPJ64qXufZpLJ8YIyAIUSPMmohH2gOZLas-knzc'},
      url: `/api/tournament/573d36d680935d590f6a5821`,
    });
  ```
<br />
