"use strict";
require("dotenv").config();

module.exports = {
  env: "development",
  db:
    process.env.MONGODB_URI ??
    "mongodb+srv://tuktuk:123!456@cluster1.7ohob.mongodb.net/tuktuk?retryWrites=true&w=majority",
  port: process.env.PORT ?? 4000,
  jwtIssuer: "localhost:4000",
  jwtExpires: 86400,
};
