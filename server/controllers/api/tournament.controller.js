import Tournament from '../../models/tournament';

export function create(req, res) {
  if (!req.body.tournamentName) {
    return res.status(400).json({
      success: false,
      msg: 'Please enter your tournament information',
    });
  }
  const tournament = new Tournament({
    tournamentName: req.body.tournamentName,
    game: req.body.game,
    creatorEmail: req.user.email,
  });
  tournament.save((err) => {
    if (err) {
      return	res.status(401).json({
        success: false,
        msg: err,
      });
    }
    return res.status(201).json({
      success: true,
      tournamentName: tournament.tournamentName,
    });
  });
}
