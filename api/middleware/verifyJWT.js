const jwt =  require("jsonwebtoken")
const AppError = require('../utils/AppError')

exports.verifyToken = async (req, res, next) => {
    const token = req.cookies.accessToken;
    // console.log(token)
    // console.log(req)
    // console.log("This is verifyToken")

    if(!token) {
        return next(AppError("You are not allowed !!!", 401))
    }
    
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if(err) return  next(AppError('Token not found !!!', 403)) 
            req.userID = payload.id
            req.isSeller = payload.isSeller
            next()
        })
}
