const express = require("express");
const router = express.Router();
const { signUp, login } = require("../controllers/users");
//creating api for user registration
router.post("/signup", signUp);

//creating api for user login
router.post("/login", login);

module.exports = router;
