const express = require('express')
const verifyJWT = require('./../middleware/verifyJWT')
const reviewController = require('./../controllers/reviewController')

const router = express.Router();

<<<<<<< HEAD
// router.post("/", reviewController.createReview)
=======
>>>>>>> 04a9e558222b053d49b7c52796f925a7b3781261
router.post("/", verifyJWT.verifyToken, reviewController.createReview)
router.get("/:gigId", reviewController.getReviews )
router.delete("/:id", reviewController.deleteReview)

module.exports = router;
