import { FETCH_TOURNAMENTS } from '../actions/action-types';
import * as gameTypes from '../constants/tournaments';

const initialTournamentList = {
  tournaments: [
    { id: 1, gid: 1, time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
    { id: 2, gid: 1, time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
    { id: 3, gid: 1, time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
    { id: 4, gid: 2, time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
    { id: 5, gid: 3, time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  ]
};

export default function (state = initialTournamentList, action){
  switch (action.type) {
    case FETCH_TOURNAMENTS:

      break;
    default:

  }
}
