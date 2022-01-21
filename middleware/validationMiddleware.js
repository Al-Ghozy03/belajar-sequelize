const { validationResult } = require("express-validator");

const middlewareRegister = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty())
    return res.status(422).json({
      status: "failed",
      error: error.mapped(),
    });
  next();
};

module.exports = {middlewareRegister}
