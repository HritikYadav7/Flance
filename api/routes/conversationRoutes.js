const express = require('express')
const verifyJWT = require('../middleware/verifyJWT')
const conversationController = require('./../controllers/conversationController')

const router = express.Router();

router.get("/", verifyJWT.verifyToken, conversationController.getConversations);
router.post("/", verifyJWT.verifyToken, conversationController.createConversation);
router.get("/single/:id", verifyJWT.verifyToken, conversationController.getSingleConversation);
router.put("/:id", conversationController.updateConversation);

module.exports = router;