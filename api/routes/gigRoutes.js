const express = require('express')
const verifyJWT = require('../middleware/verifyJWT')
const gigController = require('./../controllers/gigController')
const authController = require('./../controllers/authController')
// const AppError = require('../utils/AppError')
// const jwt =  require("jsonwebtoken")
const router = express.Router();
 

router.post("/", authController.verifyToken, gigController.createGig);
router.delete("/:id", authController.verifyToken, gigController.deleteGig);
router.get("/single/:id", gigController.getGig);
router.get("/", gigController.getGigs);

module.exports = router;