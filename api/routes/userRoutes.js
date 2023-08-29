const express = require('express')
const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController')
const verifyJWT = require('./../middleware/verifyJWT')

const router = express.Router();

router.get("/:id",  userController.getUser)
router.delete("/:id", authController.verifyToken, userController.deleteUser)

module.exports = router;
