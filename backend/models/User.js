const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;
const {fitnessRecordSchema} = require('./fitnessRecord');

const   locationSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: false,
  },
  longitude: {
    type: Number,
    required: false,
  },
});

const userSchema = new Schema({
  username: {
    lowercase: true,
    maxlength: 255,
    minlength: 5,
    required: false,
    trim: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String
  },
  firstname: {
    required: false,
    type: String
  },
  lastname: {
    required: false,
    type: String
  },
  age: {
    required: false,
    type: String
  },
  gender: {
    required: true,
    type: String
  },
  country: {
    required: false,
    type: String
  },
  usertype: {
      type: String,
      required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  location: {
    type: locationSchema,
    required: false
  },
  dailyActiveGoal: {
    type: Number,
    required: true
  },
  weeklyActiveGoal: {
    type: Number,
    required: true
  },
  fitnessHistory: {
    type: [fitnessRecordSchema],
    default: []
  }
});



userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', userSchema);
