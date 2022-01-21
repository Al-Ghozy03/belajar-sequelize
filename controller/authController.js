const { validationResult } = require("express-validator");
const UserModel = require("../models").user
const bcrypt = require("bcrypt")

const register = async (req, res) => {
  
  try {
    let body = req.body;
    body.password = await bcrypt.hashSync(body.password, 10);
    const user = await UserModel.create(body);
    res.status(201).json({
      status: "succes",
      message: "register berhasil",
      data: body,
    });
  } catch (er) {
    console.log(er);
    res.sendStatus(422);
  }
};

module.exports = { register };
