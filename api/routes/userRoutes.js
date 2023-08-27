const express = require('express')
const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController')

const router = express.Router();

router.delete("/:id", authController.verifyToken, userController.deleteUser)

module.exports = router;
