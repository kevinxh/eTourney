import mongoose from './config/mongoose'
import express from './config/express'
import passport from './config/passport'


export default function () {
  mongoose()
  const app = express()
  passport()
  return app
}
