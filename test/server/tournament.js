import { assert, expect } from 'chai';
import request from 'request';
import Tournament from '../../server/models/tournament';
import Game from '../../server/models/game';

export default function () {
  describe('Tournament System unit tests', function () {
    // TODO: To make the tests faster, seperate webpack build from default app
    this.timeout(10000);
    const config = {
      // todo: dynamically generate JWT instead of hard code, since JWT expires in 3 months.
      // todo: dynamically generate testing tournament with different options
      token: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvdXJuYW1lbnRhcGlAZXRvdXJuZXkuY29tIiwiaWF0IjoxNDYzOTgyOTE2LCJleHAiOjE0NjkxNjY5MTZ9.XMK2RY68s7GI1JFiR6FESVoPkdHaz71AUBlOK2Lug4s',
      testingTournament: {
        tournamentName: 'testingTournament01',
        game: 'Overwatch',
      },
      endPoints: {
        createTournament: 'http://localhost:8080/api/tournaments/create',
        findTournamentByID: 'http://localhost:8080/api/tournaments'
      }
    };

    let authenticatedRequest;

    // After completing all tests
    after((done) => {

      Tournament.findOne({ tournamentName: config.testingTournament.tournamentName}, (err, tournament) => {
        tournament.remove((errRemove) => {
          if (errRemove) throw errRemove;
          done();
        });
      })
    });

    describe('Create new tournament', () => {
      it('without authentication token', (done) => {
        request.post(config.endPoints.createTournament, (err, resp, body) => {
          expect(resp.statusCode, 'Status should be 401').to.equal(401);
          expect(body, 'Body should only contain "Unauthorized"').to
            .equal('Unauthorized');
          done();
        });
      });

      it('without tournament name', (done) => {
        authenticatedRequest = request.defaults({ headers: { Authorization: config.token } });
        authenticatedRequest.post(config.endPoints.createTournament, {
          form: { game: config.testingTournament.game }
        }, (err, resp, body) => {
          expect(resp.statusCode, 'Status should be 400').to.equal(400);
          assert(JSON.parse(body).msg === 'Please enter your tournament name',
          'Should return "Please enter your tournament name"');
          done();
        });
      });

      it('without tournament game', (done) => {
        authenticatedRequest.post(config.endPoints.createTournament, {
          form: { tournamentName: config.testingTournament.tournamentName }
        }, (err, resp, body) => {
          expect(resp.statusCode, 'Status should be 400').to.equal(400);
          assert(JSON.parse(body).msg === 'Request failed. Game not found.',
          'Should return "Request failed. Game not found."');
          done();
        });
      });

      it('should succeed with valid name and valid game', (done) => {
        authenticatedRequest.post(config.endPoints.createTournament, {
          form: config.testingTournament
        }, (err, resp, body) => {
          expect(resp.statusCode, 'Status should be 201').to.equal(201);
          const parsedBody = JSON.parse(body);
          assert(parsedBody.success === true,
          'Should return true status and successfully register');
          expect(parsedBody.tournament,
            'should have tournament info').
            to.contain.all.keys(config.testingTournament);
          done();
        });
      });

      it('should fail creating when tournament name is already in use', (done) => {
        authenticatedRequest.post(config.endPoints.createTournament, {
          form: config.testingTournament
        }, (err, resp, body) => {
          // TODO: Valid error message needs to be used as validation here
          assert(JSON.parse(body).success === false,
          'Should fail creating and success status == false');
          done();
        });
      });
    });
  });
}
