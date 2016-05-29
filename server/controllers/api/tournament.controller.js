import Tournament from '../../models/tournament';

export function createTournament(req, res) {
  if (!req.body.tournamentName) {
    return res.status(400).json({
      success: false,
      msg: 'Please enter your tournament name',
    });
  }
  if (!req.body.game) {
    return res.status(400).json({
      success: false,
      msg: 'Please enter your choice of game',
    });
  }
  const tournament = new Tournament({
    tournamentName: req.body.tournamentName,
    game: req.body.game,
    creatorEmail: req.user.email,
  });
  tournament.save((err) => {
    if (err) {
      return	res.status(403).json({
        success: false,
        msg: err,
      });
    }
    return res.status(201).json({
      success: true,
      tournament,
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
