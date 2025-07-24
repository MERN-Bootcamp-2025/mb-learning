const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const User = require("../models/User");

router.put("/signup", [
  body("email")
    .isEmail()
    .withMessage("Please enter valid email")
    .custom((value, { req }) => {
      return User.findOne({ email: value }).then((userDoc) => {
        if (userDoc) {
          return Promise.reject("Email address already exists!");
        }
      });
    })
    .normalizeEmail(),
  body("password").trim().isLength({ min: 5 }),
  body("name").trim().not().isEmpty(),
],signup);

router.post('/login',login);

module.exports = router;
