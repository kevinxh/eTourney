import mongoose, { Schema } from 'mongoose';

export const TournamentSchema = new Schema({
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

TournamentSchema.pre('remove', function (next) {
  mongoose.model('Game').update({ _id: this.game }, { $pullAll: {tournaments: [this._id]}});
  // mongoose.model('Game').findOne({ _id: this.game }, (err, game) => {
  //   const index = game.tournaments.indexOf(this._id);
  //   game.tournaments.splice(index,1);
  //   game.save((err) => {
  //     next()
  //   });
  // });
})
// Registering the Tournament model
export default mongoose.model('Tournament', TournamentSchema);
