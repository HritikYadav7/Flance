const express = require('express')
const messageController = require('./../controllers/messageController')
const verifyJWT = require('./../middleware/verifyJWT.js')

const router = express.Router();

router.post("/", verifyJWT.verifyToken, messageController.createMessage);
router.get("/:id", verifyJWT.verifyToken, messageController.getMessages);

module.exports = router;