// For now, just mock

import * as gameTypes from '../constants/tournaments';

const tournaments = [
  { id: 1, gid: 1, name: 'Just a tourney', time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 2, gid: 1, name: 'Just a tourney', time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 3, gid: 1, name: 'Just a tourney', time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 4, gid: 2, name: 'basdf', time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
  { id: 5, gid: 3, name: 'aaa', time: 'May, 15th 2016 19:00', type: gameTypes.PREMADE_5P, prize: '10000' },
];

const fetchTournaments = function (gid = null) {
  if (!gid) {
    return tournaments;
  }
  tournaments.filter( (tour) => {
  });
  return tournaments.filter((tournament) => tournament.gid === parseInt(gid, 10));
};

export default {
  fetchTournaments
};
