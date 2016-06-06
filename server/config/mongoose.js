import config from './secret';
import mongoose from 'mongoose';

// Registering models
require('../models/user');
require('../models/tournament');
require('../models/game')

export default function () {
  const db = mongoose.connect(config.db_connection_url);
  return db;
}
