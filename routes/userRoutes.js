const router = require('express').Router()
const { json } = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

// Create user data
router.post('/users/register', async function (req, res) {

  // Create variables for incoming data
  const {
    firstName,
    lastName,
    email,
    username,
    password
  } = req.body

  // Register the new user to Mongo DB
  await User.register(new User({
    firstName,
    lastName,
    email,
    username
  }), password, err => {
    if (err) {
      res.json(err)
    }
    else {
      res.json({
        status: 200,
        req: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          username: req.body.username,
          password: req.body.password
        }
      })
    }
  })

})

// Authenicate a user and sign them in if user params match
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})

// Get user individual user data
router.get('/user', passport.authenticate('jwt'), async function (req, res) {
  await res.json(req.user)
})



module.exports = router
