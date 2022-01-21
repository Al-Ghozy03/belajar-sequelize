const express = require("express");
const router = express();
const bcrypt = require("bcrypt");
const { register } = require("../controller/authController");
const { registerValidator } = require("../validator/authValidator");
const { middlewareRegister } = require("../middleware/validationMiddleware");
// const {check} = require("")

router.post("/register",registerValidator,middlewareRegister,register);

module.exports = router;
