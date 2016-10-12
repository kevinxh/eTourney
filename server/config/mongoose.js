import config from './secret'
import mongoose from 'mongoose'

// Registering models
require('../models/user')
require('../models/tournament')
require('../models/game')
require('../models/game-lol')

export default function () {
  const db = mongoose.connect(config.db_connection_url)
  return db
}
