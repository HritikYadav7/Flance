const AppError = require('./../utils/AppError')
const Gig = require('./../models/gigModel')
// const ObjectId = require('mongodb').ObjectId;



exports.createGig = async (req, res, next) => {
    if(!req.isSeller) {
        return  next(AppError("Not Authenticated", 403))
    }
    // console.log(req.body)
    console.log("CR7")
    const newGig = new Gig({
        userId: req.userID,
        ...req.body,
    })
    // console.log(newGig);
    try {
        const savedGig = await newGig.save();
        res.status(201).json(savedGig)
    } catch (err) {
        console.log(err)
        next(err)
    }
}
exports.deleteGig = async(req, res, next) => {
    try{
        // console.log("cr7")
        const gig = await Gig.findById(req.params.id)
        if(gig.userId !== req.userID) return next(AppError("You can delete only your GIG !!!", 403))
        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).send("Gig has been deleted!");
    }catch(err){
        next(err)
    }
}

exports.getGig = async(req, res, next) => {
    try{
        const gig = await Gig.findById(req.params.id)
        if(!gig) return next(AppError("Gig not found !!!", 404))
        res.status(200).send(gig)
    }catch(err){
        next(err)
    }
}
exports.getGigs = async(req, res, next) => {
    const q = req.query;
    const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gte: q.min }),
        ...(q.max && { $lte: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  try {
    const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
    // const gigs = await Gig.sort({ [q.sort]: -1 });

    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
}


