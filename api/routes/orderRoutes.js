
const express = require('express')
const verifyJWT = require('../middleware/verifyJWT')
const orderController = require('./../controllers/orderController')

const router = express.Router();

router.post("/:gigId", verifyJWT.verifyToken, orderController.createOrder);
router.get("/", verifyJWT.verifyToken, orderController.getOrders);
// router.post("/create-payment-intent/:id", verifyJWT.verifyToken, orderController.intent);
router.put("/", verifyJWT.verifyToken, orderController.confirm);

module.exports = router;
// export default router;
