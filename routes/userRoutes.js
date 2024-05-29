const express = require("express");
const {
  registerUser,
  loginUser,
  protectedFunction,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

router.post("/protect", protect, protectedFunction);

module.exports = router;
