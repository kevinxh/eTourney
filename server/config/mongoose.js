import config from './secret';
import mongoose from 'mongoose';

// Registering the User model
require('../models/user');

export default function () {
  const db = mongoose.connect(config.db_connection_url);
  return db;
}
