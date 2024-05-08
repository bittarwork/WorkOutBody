const express = require("express");
const router = express.Router();

// controler functions importing
const { login, signup } = require("../controllers/userControler");

// login route
router.post("/login", login);
// signup route
router.post("/signup",signup );

module.exports = router;
 