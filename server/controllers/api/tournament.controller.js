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

  Game.findOne({ name: req.body.game }, (err, game) => {
    if (err) {
      return res.status(403).json({
        success: false,
        msg: err,
      });
    }
    if (!req.body.tournamentName) {
      return res.status(400).json({
        success: false,
        msg: 'Please enter your tournament name'
      })
    }
    // if no such tournament
    if (!game) {
      return res.status(400).json({
        success: false,
        msg: 'Request failed. Game not found.',
      });
    }
    const tournament = new Tournament({
      tournamentName: req.body.tournamentName,
      game,
      creatorEmail: req.user.email,
    });

    tournament.save((errSaveTournament) => {
      if (errSaveTournament) {
        return res.status(500).json({
          success: false,
          msg: errSaveTournament
        });
      }
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
  });
}

export function findTournamentByID(req, res) {
  try {
    Tournament.findOne({ _id: req.params.tournamentID })
      .populate('game')
      .exec((err, tournament) => {
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

export function findTournaments(req, res) {
  const gid = req.query.gid;

  /**
    TODO : Find a better solution to add
     game search term
  **/
  const queryOpts = {};
  if (gid) queryOpts.game = gid;

  Tournament.find(queryOpts, (err, tournaments) => {
    if (err) {
      return res.status(500).json({
        success: false,
        msg: err
      });
    }
    return res.status(200).json({
      success: true,
      tournaments
    });
  });
}
