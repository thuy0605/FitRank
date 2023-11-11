'use strict';
require('dotenv').config();

module.exports = {
  env: 'development',
  db: process.env.MONGODB_URI,
  port: process.env.PORT || 4000,
  jwtIssuer: 'localhost:4000',
  jwtExpires: 86400
};
