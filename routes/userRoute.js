const express = require("express");
const { index, detail, detailByEmail, getByName, deleteUsers, updateUsers } = require("../controller/userControllers");
const userRoute = express();

userRoute.get("/",index)
userRoute.get("/:id",detail)
userRoute.get("/email/:email",detailByEmail)
userRoute.get("/name/:name",getByName)
userRoute.delete("/delete/:id",deleteUsers)
userRoute.put("/update/:id",updateUsers)

module.exports = {userRoute}