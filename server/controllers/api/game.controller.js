import Game from '../../models/game';

export function createGame(req, res) {
  const { gameName } = req.body;
  if (!gameName) {
    return res.status(400).json({
      success: false,
      msg: 'Please enter a game name'
    });
  }
  const game = new Game({
    gameName
  });

  game.save((err) => {
    if (err) {
      return res.status(403).json({
        success: false,
        msg: err
      });
    }
    return res.status(201).json({
      success: true,
      game
    });
  });
}

export function findGameByName(req, res) {
  try {
    Game.findOne({ gameName: req.params.gameName }, (err, game) => {
      if (err) {
        return res.status(403).json({
          success: false,
          msg: err
        });
      }
      if (!game) {
        return res.status(404).json({
          success: false,
          msg: 'Request failed. Game not found.'
        });
      }
      return res.status(200).json({
        success: true,
        game
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error
    });
  }
}

export function findGameById(req, res) {
  try {
    Game.findOne({ _id: req.params.gameID }, (err, game) => {
      // if error finding an game
      if (err) {
        return res.status(403).json({
          success: false,
          msg: err,
        });
      }
      // if no such game
      if (!game) {
        return res.status(401).json({
          success: false,
          msg: 'Request failed. Game not found.',
        });
      }
      return res.status(200).json({
        success: true,
        game,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: 'Unknown error',
    });
  }
}

export function getAllGameTournaments(req, res) {
  try {
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: err
    });
  }
}
