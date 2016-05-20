import { SELECT_GAME } from '../actions/action-types';

const initialGameList = [
  { name: 'HurtStone', id: 1 },
  { name: 'CSPRO', id: 2 },
  { name: 'GOATA2', id: 3 },
  { name: 'abc', id: 4 },
  { name: 'AB', id: 5 },
  { name: '123', id: 6 },
  { name: 'asdasd', id: 7 },
  { name: 'zxc', id: 8 },
];

export default function (state = initialGameList, action){
  switch (action) {
    // case SELECT_GAME:
      // return
      // break;
    default:
      return state;
  }
}
