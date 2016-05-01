import config from './secret';
import User from '../models/user';
import mongoose from 'mongoose';

export default function() {
  	const db = mongoose.connect(config.db_connection_url);

  	//Registering the User model
  	//require('../models/user');

  	return db;
};
