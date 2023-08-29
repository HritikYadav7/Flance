const express = require('express')
const gigController = require('./../controllers/gigController')
const verifyJWT = require('../middleware/verifyJWT')
const AppError = require('../utils/AppError')
const jwt =  require("jsonwebtoken")

const router = express.Router();
 
router.post("/", verifyJWT.verifyToken, gigController.createGig);
router.delete("/:id", verifyJWT.verifyToken, gigController.deleteGig);
router.get("/single/:id", verifyJWT.verifyToken, gigController.getGig);
router.get("/", verifyJWT.verifyToken, gigController.getGigs);

module.exports = router;