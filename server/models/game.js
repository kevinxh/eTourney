import mongoose, { Schema } from 'mongoose'

const GameSchema = new Schema({
  name: {
    type: String,
    index: true,
    required: 'Game name is required',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  tournaments: [{
    type: Schema.Types.ObjectId,
    ref: 'Tournament',
  }],
}, { collection: 'Game' })

export default mongoose.model('Game', GameSchema)
