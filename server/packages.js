const express = require("express");
const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const config = require("config");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Joi = require("joi");

module.exports = {
  express,
  mongoose,
  config,
  cors,
  path,
  jwt,
  bcrypt,
  model,
  Schema,
  Joi,
};
