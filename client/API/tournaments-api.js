// For now, just mock

import * as gameTypes from '../constants/tournaments';

const tournaments = [
  { id: 1, gid: 1, time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 2, gid: 1, time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 3, gid: 1, time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 4, gid: 2, time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 5, gid: 3, time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
];

const fetchTournaments = function(gid = null) {
  if (!gid) {
    return tournaments;
  } else {
    return tournaments.filter((tournament) =>
      (tournament.gid === gid));
  }
};
