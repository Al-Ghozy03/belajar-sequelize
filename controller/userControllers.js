const UserModel = require("../models").user;
async function index(req, res) {
  try {
    const users = await UserModel.findAll({
      // attributes: ["id", "name"],
      // limit: 4,
      // order: [["name", "desc"]],
    });
    return res.json({
      status: "succes",
      data: users,
    });
  } catch (er) {
    console.log(er);
  }
}

const detail = async (req, res) => {
  try {
    const { id } = req.params;

    const users = await UserModel.findByPk(id);
    if (users === null) {
      return res.status(403).json({
        status: "fail",
        msg: "there's no id like this",
      });
    }
    return res.json({
      status: "succes",
      msg: "find it",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      status: "fail",
      msg: "there's a mistake",
    });
  }
};

const detailByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const users = await UserModel.findOne({
      where: {
        email: email,
      },
    });
    if (users === null) {
      return res.status(200).json({
        status: "fail",
        msg: "there's no email like this, LMAO",
      });
    }
    return res.json({
      status: "succes",
      msg: "find it",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      status: "fail",
      msg: "there's a mistake",
    });
  }
};

const getByName = async (req, res) => {
  try {
    const { name } = req.params;
    const users = await UserModel.findOne({
      where: {
        name: name,
      },
    });

    if (users === null)
      return res.json({
        message: `tidak ada yang namanya ${name}`,
      });
    res.json({
      message: "found",
      data: users,
    });
  } catch (er) {}
};

const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await UserModel.destroy({
      where: {
        id: id,
      },
    });

    if (users === null)
      return res.json({
        message: `tidak ada yang namanya ${id}`,
      });
    res.json({
      message: "found",
      data: users,
    });
  } catch (er) {}
};

const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const users = await UserModel.findByPk(id);

    if (users === null)
      return res.json({
        message: `user tidak ditemukan`,
      });
    await UserModel.update(
      {
        name: name,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json({
      message: "berhasil update",
    });
  } catch (er) {
    console.log(er);
  }
};
module.exports = {
  index,
  detail,
  detailByEmail,
  getByName,
  deleteUsers,
  updateUsers,
};
