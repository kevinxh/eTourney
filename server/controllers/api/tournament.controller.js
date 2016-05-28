import Tournament from '../../models/tournament';
import Game from '../../models/game';

export function createTournament(req, res) {
  // if (!req.body.tournamentName) {
  //   return res.status(400).json({
  //     success: false,
  //     msg: 'Please enter your tournament name',
  //   });
  // }
  // if (!req.body.game) {
  //   return res.status(400).json({
  //     success: false,
  //     msg: 'Please enter your choice of game',
  //   });
  // }

  Game.findOne({ gameName: req.body.game }, (err, game) => {
    if (err) {
      return res.status(403).json({
        success: false,
        msg: err,
      });
    }
    // if no such tournament
    if (!game) {
      return res.status(401).json({
        success: false,
        msg: 'Request failed. Game not found.',
      });
    }
    const tournament = new Tournament({
      tournamentName: req.body.tournamentName,
      game,
      creatorEmail: req.user.email,
    });

    game.tournaments.push(tournament);
    game.save((errSave) => {
      if (errSave) {
        return	res.status(403).json({
          success: false,
          msg: errSave,
        });
      }
      return res.status(201).json({
        success: true,
        tournament,
      });
    });
  });
}

export function findTournamentByID(req, res) {
  try {
    Tournament.findOne({ _id: req.params.tournamentID }, (err, tournament) => {
      // if error finding an tournament
      if (err) {
        return res.status(403).json({
          success: false,
          msg: err,
        });
      }
      // if no such tournament
      if (!tournament) {
        return res.status(401).json({
          success: false,
          msg: 'Request failed. Tournament not found.',
        });
      }
      return res.status(200).json({
        success: true,
        tournament,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: 'Unknown error',
    });
  }
}
