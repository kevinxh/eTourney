import { SELECT_GAME } from '../actions/actions-types';

const initialGameList = [
  { name: 'HurtStone' },
  { name: 'CSPRO' },
  { name: 'GOATA2' },
  { name: 'abc' },
  { name: 'AB' },
  { name: '123' },
  { name: 'asdasd' },
  { name: 'zxc' },
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
