const { check } = require("express-validator");
const UserModel = require("../models").user;

const registerValidator = [
  check("name").isLength({ min: 1 }).withMessage("name must be field"),
  check("email")
    .isEmail()
    .withMessage("gunakan email valid")
    .custom((value) => {
      return UserModel.findOne({ where: { email: value } }).then((user) => {
        if (user) return Promise.reject("email has been used");
      });
    }),
    check("password").isLength({min:8}).withMessage("minimal 8 characters"),
    check("status").isIn(["active","nonactive"]).withMessage("status doesn't valid"),
    check("gender").isIn(["pria","wanita"]).withMessage("gender doesn't valid"),
];

module.exports = { registerValidator };
