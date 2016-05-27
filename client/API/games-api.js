// For now, just mock

const games = [
  { name: 'Hearthstone', id: 1 },
  { name: 'CS:GO', id: 2 },
  { name: 'DOTA2', id: 3 },
  { name: 'League', id: 4 },
  { name: 'Game 5', id: 5 },
  { name: 'Game 6', id: 6 }
];

const fetchGames = function () {
  return games;
};

const fetchGame = function(gameId){
  console.log(gameId);
  return games.filter((game) => game.id === parseInt(gameId))[0];
}

export default {
  fetchGames,
  fetchGame
};
