var express = require("express");
var router = express.Router();

const { checkTokenWrite, checkTokenRead } = require("../middleware");
const { findAllUsers, createUser } = require("../controller/user.controller");

/* FindAll users */
router.get("/", checkTokenRead, async (req, res, next) => {
  const users = await findAllUsers();
  res.json(users);
});

/* Create users */
router.post("/", async (req, res, next) => {
  createUser(req.body);
  res.json(`User inserted`);
});
module.exports = router;
