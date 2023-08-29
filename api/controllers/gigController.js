const AppError = require('./../utils/AppError')
const Gig = require('./../models/gigModel')
// const ObjectId = require('mongodb').ObjectId;



exports.createGig = async (req, res, next) => {
    if(!req.isSeller) {
        return  next(AppError("Not Authenticated", 403))
    }
    const newGig = new Gig({
        userId: req.userID,
        ...req.body,
    })
    try {
        const savedGig = await newGig.save();
        res.status(201).json(savedGig)
    } catch (err) {
        next(err)
    }
    // next()
}
exports.deleteGig = async(req, res, next) => {
    try{
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

    }catch(err){
        next(err)
    }
}
exports.getGigs = async(req, res, next) => {
    try{

    }catch(err){
        next(err)
    }
}


