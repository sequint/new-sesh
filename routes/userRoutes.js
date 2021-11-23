const router = require('express').Router()
const { json } = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

// Create user data
router.post('/users/register', async function (req, res) {
  console.log(req.body)

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

module.exports = router
