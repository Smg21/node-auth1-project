// Require the `restricted` middleware from `auth-middleware.js`. You will need it here!
const express = require("express");
const Users = require("./users-model");
const { restricted } = require("./../auth/auth-middleware");

const router = express.Router();

router.get("/", restricted, async (req, res, next) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});
// Don't forget to add the router to the `exports` object so it can be required in other modules
module.exports = router;