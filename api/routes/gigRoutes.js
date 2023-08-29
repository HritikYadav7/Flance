const express = require('express')
const gigController = require('./../controllers/gigController')
const verifyJWT = require('../middleware/verifyJWT')
const AppError = require('../utils/AppError')
const jwt =  require("jsonwebtoken")

const router = express.Router();
 
router.post("/", verifyJWT.verifyToken, gigController.createGig);
router.delete("/:id", verifyJWT.verifyToken, gigController.deleteGig);
// router.post("/", verifyToken, gigController.getGig);
// router.post("/", verifyToken, gigController.getGigs);

module.exports = router;