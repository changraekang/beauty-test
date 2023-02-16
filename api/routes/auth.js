const express = require("express");
const {
  login,
  logout,
  register,
  getRanking,
} = require("../controllers/auth.js");

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getRanking", getRanking);

module.exports = router;
