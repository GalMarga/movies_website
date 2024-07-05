// RouterMembers.js

const express = require("express");
const MembersServices = require("../Services/servicesMembers");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const members = await MembersServices.getAllMembers();
    res.send(members);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const member = await MembersServices.getMemberById(req.params.id);
    res.send(member);
  } catch (error) {
    res.send;
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const member = await MembersServices.addMember(req.body);
    res.send(member);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const member = await MembersServices.updateMember(req.params.id, req.body);
    res.send(member);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const member = await MembersServices.deleteMembers(req.params.id);
    res.send(member);
  } catch (error) {
    res.send;
    console.log(error);
  }
});

module.exports = router;
