const AppError = require('./../utils/AppError')
const Gig = require('./../models/gigModel')

exports.createGig = async (req, res, next) => {
    if(!req.isSeller) {
        return  next(AppError("Not Authenticated", 403))
    }
    const newGig = new Gig({
        userId: req.userId,
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



