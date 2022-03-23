const { connect } = require("../lib/mongoUtils");

connect();

var express = require("express");
var router = express.Router();

var HandlerGenerator = require("../handlegenerator.js");

HandlerGenerator = new HandlerGenerator();

router.post("/login", HandlerGenerator.login);

module.exports = router;
