const { model, Schema } = require('mongoose')
const { number } = require('yargs')

const User = new Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  preferences: [
    waveHeights: [
      height: Number
    ],
    waterTemp: [
      lowTemp: Number,
      highTemp: Number
    ]
  ],
  jobs: [{
    type: Schema.Types.ObjectId,
    ref: 'Job'
  }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
