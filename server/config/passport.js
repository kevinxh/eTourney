import passport from 'passport'
import mongoose from 'mongoose'
import { passportJWT } from './passport-jwt.js'

export default function () {
  mongoose.model('User')
  passportJWT(passport)
}
