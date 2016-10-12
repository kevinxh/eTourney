import mongoose, { Schema } from 'mongoose'

const GameLOLSchema = new Schema({
  tournamentName: {
    type: String,
    index: true,
    required: 'Game name is required',
    minlength: 2,
    maxlength: 20,
  },
  game: {
    type: String,
    enum: ['lol', 'LoL', 'League of Legends', 'League of Legends', 'LOL', 'LEAGUE OF LEGENDS', 'league of legends']
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  server: {
    type: String,
    enum: ['China', 'Canada'],
    default: 'China',
  },
  gametype: {
    type: String,
    enum: ['1V1', '3V3', '5V5'],
  },
  rules: {
    type: String,
    maxlength: 500,
  },
  participantCap: {
    type: Boolean,
    default: false,
  },
  participantLimit: {
    type: Number,
    min: 1,
    max: 200,
  },
  private: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 16,
  },
}, { collection: 'Game-LoL' })

export default mongoose.model('Game-LoL', GameLOLSchema)
