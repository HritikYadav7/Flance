const jwt =  require("jsonwebtoken")
const AppError = require('../utils/AppError')

exports.verifyToken = async (req, res, next) => {
  const token = req.cookies.accessToken
  if(!token) return next(AppError("You are not allowed !!!", 401))
  try{
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if(err) return  next(AppError('Token not found !!!', 403)) 
        req.userID = payload.id
        req.isSeller = payload.isSeller
    })
  }
  catch{
    console.log("Yeah")
  }
  next()
}
