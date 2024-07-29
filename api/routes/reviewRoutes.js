const express = require('express')
const verifyJWT = require('./../middleware/verifyJWT')
const reviewController = require('./../controllers/reviewController')
const authController = require('./../controllers/authController')

const router = express.Router();

router.post("/", authController.verifyToken, reviewController.createReview)
// router.post("/", reviewController.createReview)
router.get("/:gigId", reviewController.getReviews )
router.delete("/:id", reviewController.deleteReview)

module.exports = router;
