import Game from '../../models/game';
import fs from 'fs';
import { S3, S3BUCKET } from '../../config/aws';

const TOP_GAMES_LIMIT = 6;

export function getAllGames(req, res) {
  Game.find({},'name tournaments', (err, games) => {
    return res.status(200).json({
      success: true,
      games
    });
  });
}

export function getTopGames(req, res) {
  Game.find({},'name tournaments', {limit: TOP_GAMES_LIMIT},  (err, games) => {
    return res.status(200).json({
      success: true,
      games
    });
  })
}

export function createGame(req, res) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      msg: 'Please enter a game name'
    });
  }
  const game = new Game({
    name
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

export function updateGameImage(req, res){
  const { file } = req;
  if (!file) {
    return res.status(400).json({
      success: false,
      msg: 'Please provide an image file'
    });
  }

  Game.findOne({ _id: req.params.gameID }, (errGameNotFound, game) => {
    // if error finding an game
    if (errGameNotFound) {
      return res.status(403).json({
        success: false,
        msg: errGameNotFound,
      });
    }
    // if no such game
    if (!game) {
      return res.status(401).json({
        success: false,
        msg: 'Request failed. Game not found.',
      });
    }
    fs.readFile(req.file.path, (errFileReadError, data) => {
      if (errFileReadError) throw errFileReadError;
      //TODO: If not Jpg, return format error

      S3.putObject({ Bucket: S3BUCKET, Key: `images/games/${game.id}.jpg`, Body: data }, (errS3Error, data) => {
        if (errS3Error) console.error(errS3Error, errS3Error.stack);
        else res.status(200).send(`Uploaded succeeded for game ${game.id}`);
        fs.unlinkSync(req.file.path);
      });

    })
  });
}

export function findGameByName(req, res) {
  try {
    Game
    .find({ name: new RegExp(req.params.name, 'i') })
    .populate({
      path: 'tournaments',
    }).exec((err, games) => {
      console.log(games);
      if (err) {
        return res.status(403).json({
          success: false,
          msg: err
        });
      }
      if (!games) {
        return res.status(404).json({
          success: false,
          msg: 'Request failed. Game not found.'
        });
      }
      return res.status(200).json({
        success: true,
        games
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
    Game.findOne({ _id: req.params.gameID }).populate('tournaments').exec((err, game) => {
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
