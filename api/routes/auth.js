const express = require("express");
const { login, logout, register, getUser } = require("../controllers/auth.js");

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getUser", getUser);

module.exports = router;
