const express = require("express");
const router = express();
const bcrypt = require("bcrypt");
const { register } = require("../controller/authController");
const { registerValidator } = require("../validator/authValidator");
const { middlewareRegister } = require("../middleware/validationMiddleware");
const { userRoute } = require("./userRoute");

router.post("/register",registerValidator,middlewareRegister,register);
router.use("/user",userRoute)


module.exports = router;
