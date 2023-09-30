const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth/authControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12),
  password: Joi.string().min(6).max(12),
  mail: Joi.string().email(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12),
  mail: Joi.string().email(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authController.controllers.postRegister
);
router.post(
  "/login",
  validator.body(loginSchema),
  authController.controllers.postLogin
);

module.exports = router;
