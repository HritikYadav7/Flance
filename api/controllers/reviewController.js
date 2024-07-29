const AppError = require('./../utils/AppError')
const Review = require('./../models/reviewModel.js')
const Gig = require('./../models/gigModel.js')

exports.createReview = async (req, res, next) => {
  // console.log("YES")
  if (req.isSeller)
    return next(AppError("Sellers can't create a review!", 403));
  const newReview = new Review({
      userId: req.userID,
      ...req.body,
    // userId: req.userId,
    // gigId: req.body.gigId,
    // desc: req.body.desc,
    // star: req.body.star,
  });
  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userID,
    });
    // console.log(req.userID)
    // console.log("In Review")
    if (review)
      return next(
        AppError("You have already created a review for this gig!", 403)
      );
    //TODO: check if the user purchased the gig.
    const savedReview = await newReview.save();
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

exports.getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ gigId: req.params.gigId });
    // console.log(reviews)
    // console.log(reviews)
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
