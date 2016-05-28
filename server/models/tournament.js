import mongoose, { Schema } from 'mongoose';

const TournamentSchema = new Schema({
  tournamentName: {
    type: String,
    index: true,
    unique: true,
    required: 'Tournament name is required',
    validate: [
      (name) => (name.length >= 2 && name.length <= 32),
      'Name length should be between 2 and 32 characters',
    ]
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
    required: 'Tournament game is required'
  },
  creatorEmail: {
    type: String,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please fill a valid e-mail address'],
    required: 'Email is required',
  },
  time: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
}, { collection: 'Tournament' });

// Registering the Tournament model
export default mongoose.model('Tournament', TournamentSchema);
