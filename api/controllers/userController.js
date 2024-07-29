const AppError = require('../utils/AppError')
const User = require('./../models/userModel')
const jwt = require('jsonwebtoken')

exports.deleteUser = async (req, res, next) => {

    const user = await User.findById(req.params.id)

    if(!user) return next(AppError('User not found !!!', 403))

    if(req.user.ID !== user.id) {
        return next(AppError('You can delete only your account !!!',))
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send('Deleted successfully !!!')
    next()
}
exports.getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
    next();
};