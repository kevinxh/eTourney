// For now, just mock

const games = [
  { name: 'HurtStone', id: 1 },
  { name: 'CSPRO', id: 2 },
  { name: 'GOATA2', id: 3 },
  { name: 'abc', id: 4 },
  { name: 'AB', id: 5 },
  { name: '123', id: 6 }
];

const fetchGames = function () {
  return games;
};

const fetchGame = function(gid){
  return games.filter((game) => game.id === parseInt(gid, 10))[0];
};

export default {
  fetchGames,
  fetchGame
};
