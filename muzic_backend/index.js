const express = require('express')
const app = express()
const passport = require('passport')
const User=require("./Models/User")
const mongoose = require('mongoose')
require('dotenv').config()
const authRoutes=require("./routes/auth")
const songRoutes=require("./routes/song")
const playlistRoutes=require("./routes/playlist")
const cors=require("cors");
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt

app.use(cors());
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log('connected to MongoDb!')
  })
  .catch((err) => {
    console.log('error occured while connecting to mongo!!')
  })

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'secret'
passport.use(
  new JwtStrategy(opts,async (jwt_payload, done) => {
  try {
    const user = await User.findOne({_id: jwt_payload.identifier });  // Await the Promise returned by findOne
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    return done(err, false);
  }
}) )


app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/auth',authRoutes)
app.use('/song',songRoutes)
app.use('/playlist',playlistRoutes)

const port = 8000

app.listen(port, () => {
  console.log('app is listening on ' + port)
})
