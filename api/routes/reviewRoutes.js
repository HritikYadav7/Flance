const express = require('express')
const verifyJWT = require('./../middleware/verifyJWT')
const reviewController = require('./../controllers/reviewController')

const router = express.Router();

router.post("/", verifyJWT.verifyToken, reviewController.createReview)
router.get("/:gigId", reviewController.getReviews )
router.delete("/:id", reviewController.deleteReview)

module.exports = router;
