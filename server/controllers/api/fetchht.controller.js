import Tournament from '../../models/tournament';

export function fetchHotTournament(req, res) {
  try {
    Tournament.find({}, (err, hotTournament) => {
      // if error finding an tournament
      if (err) {
        return res.status(403).json({
          success: false,
          msg: err,
        });
      }
      // if no such tournament
      if (!hotTournament) {
        return res.status(401).json({
          success: false,
          msg: 'Request failed. Tournament not found.',
        });
      }
      return res.status(200).json({
        success: true,
        hotTournament,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: 'Unknown error',
    });
  }
}
