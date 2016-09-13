import Tournament from '../../models/tournament'
import Game from '../../models/game'
import fs from 'fs'
import { S3, S3BUCKET } from '../../config/aws'

export function createTournament(req, res) {
  Game.findOne({ name: req.body.game }, (err, game) => {
    if (err) {
      return res.status(403).json({
        success: false,
        msg: err,
      })
    }
    if (!req.body.tournamentName) {
      return res.status(400).json({
        success: false,
        msg: 'Please enter your tournament name',
      })
    }
    // if no such game
    if (!game) {
      return res.status(400).json({
        success: false,
        msg: 'Request failed. Game not found.',
      })
    }
    const tournament = new Tournament({
      tournamentName: req.body.tournamentName,
      game: { id: game._id, name: req.body.game },
      creatorEmail: req.user.email,
    })

    tournament.save((errSaveTournament) => {
      if (errSaveTournament) {
        return res.status(500).json({
          success: false,
          msg: errSaveTournament,
        })
      }
      game.tournaments.push(tournament)
      game.save((errSave) => {
        if (errSave) {
          return	res.status(403).json({
            success: false,
            msg: errSave,
          })
        }
        return res.status(201).json({
          success: true,
          tournament,
        })
      })
    })
  })
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
          })
        }
        // if no such tournament
        if (!tournament) {
          return res.status(400).json({
            success: false,
            msg: 'Request failed. Tournament not found.',
          })
        }
        return res.status(200).json({
          success: true,
          tournament,
        })
      })
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: 'Unknown error',
    })
  }
}

export function findTournaments(req, res) {
  const gid = req.query.gid

  /**
    TODO : Find a better solution to add
     game search term
  **/
  const queryOpts = { }
  if (gid) queryOpts['game.id'] = gid

  console.log(queryOpts)

  Tournament.find(queryOpts, (err, tournaments) => {
    console.log(tournaments)
    if (err) {
      return res.status(500).json({
        success: false,
        msg: err,
      })
    }
    return res.status(200).json({
      success: true,
      tournaments,
    })
  })
}

export function fetchHotTournaments(req, res) { // needs more work
  try {
    Tournament.find({}, (err, hotTournament) => {
      // if error finding an tournament
      if (err) {
        return res.status(403).json({
          success: false,
          msg: err,
        })
      }
      // if no such tournament
      if (!hotTournament) {
        return res.status(401).json({
          success: false,
          msg: 'Request failed. Tournament not found.',
        })
      }
      return res.status(200).json({
        success: true,
        hotTournament,
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: 'Unknown error',
    })
  }
}

export function tournamentImage(req, res) {
  const { file } = req

  if (!file) {
    return res.status(400).json({
      success: false,
      msg: 'Please provide an image file',
    })
  }

  Tournament.findOne({ _id: req.params.tournamentID }, (errTourNotFound, tournament) => {
    // if error finding an tournaments
    if (errTourNotFound) {
      return res.status(403).json({
        success: false,
        msg: errTourNotFound,
      })
    }
    // if no such tournaments
    if (!tournament) {
      return res.status(401).json({
        success: false,
        msg: 'Request failed. Game not found.',
      })
    }
    fs.readFile(req.file.path, (errFileReadError, data) => {
      if (errFileReadError) throw errFileReadError
      // TODO: If not Jpg, return format error

      S3.putObject({ Bucket: S3BUCKET, Key: `images/tournaments/${tournament.id}.jpg`, Body: data },
        (errS3Error, data) => {
          if (errS3Error) console.error(errS3Error, errS3Error.stack)
          else {
            Tournament.findByIdAndUpdate(tournament.id, { uploadedImage: true },
              (err, t) => {
                if (err) {
                  return res.status(500).json({
                    success: false,
                    err,
                    msg: 'Request failed. Database update error.',
                  })
                }
              })
            res.status(200).send(`Uploaded succeeded for tournament ${tournament.id}`)
          }
          fs.unlinkSync(req.file.path)
        })
    })
  })
}
