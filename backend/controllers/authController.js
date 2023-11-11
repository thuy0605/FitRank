const express = require('express');
const router = express.Router();
const httpStatus = require('../lib/httpStatus');
const jwtModule = require('../lib/jwtModule');
const verifyToken = require('../lib/verifyToken');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/index');

router.post('/login', function(req, res) {
  const {application, username, password} = req.body
  if (!application || !username || !password) {
    return res.status(httpStatus.BAD_REQUEST).send({ auth: false, error: 'Invalid parameters in request' });
  }
  User.findOne({ username }, function (error, user) {
    if (error) {
      const message = `Server error: ${error.message}`
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ auth: false, error: message });
    } else {
      if (user) {
        const {_id, username, password} = user
        const passwordMatch = bcrypt.compareSync(req.body.password, password);
        if (passwordMatch) {
          // sign and return a new token
          const payload = {id: _id}
          const signingOptions = {
            subject: username,
            audience: application
          }
          const signedToken = jwtModule.sign(payload, signingOptions)
          return res.status(httpStatus.OK).send({ auth: true, token: signedToken });
        } else {
          return res.status(httpStatus.UNAUTHORIZED).send({ auth: false, token: null });
        }
      } else {
        const message = `User not found (username: ${req.body.username})`
        return res.status(httpStatus.NOT_FOUND).send({ auth: false, error: message });
      }
    }
  });
});

router.post('/register', async function(req, res) {
  const {application, username, password, weight, height, usertype, gender, dailyActiveGoal, weeklyActiveGoal} = req.body
  if (!application || !username || !password) {
    return res.status(httpStatus.BAD_REQUEST).send({ registered: false, error: 'Invalid parameters in request' });
  }
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  try {
    const user = await User.create({
      username: username,
      password: hashedPassword,
      weight: weight,
      height: height,
      usertype: usertype,
      gender: gender,
      dailyActiveGoal: dailyActiveGoal,
      weeklyActiveGoal: weeklyActiveGoal
    });

    const payload = { id: user._id };
    const options = { subject: username, audience: application };
    const signedToken = jwtModule.sign(payload, options);

    res.status(httpStatus.OK).send({ registered: true, token: signedToken });
  } catch (error) {
    const message = `Server error: ${error.message}`;
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ registered: false, error: message });
  }

});

module.exports = router;
