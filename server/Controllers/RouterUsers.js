// RouterUsers.js

const express = require("express");
const UserServices = require("../Services/servicesUsers");

const router = express.Router();



router.get("/", async (req, res) => {
  try {
    const users = await UserServices.getAllUsers();
    res.send(users);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await UserServices.getUserById(req.params.id);
    res.send(user);
  } catch (error) {
    res.send;
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await UserServices.addUser(req.body);
    res.send(user);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});


module.exports = router;
