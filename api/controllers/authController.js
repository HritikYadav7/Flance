const User = require('./../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const AppError = require('./../utils/AppError')

exports.verifyToken = async (req, res, next) => {
    const token = req.cookies.accessToken
    if(!token) return next(AppError("You are not allowed !!!", 401))
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if(err) return  next(AppError('Token not found !!!', 403)) 
        req.userID = payload.id
        req.isSeller = payload.isSeller
    })
    next()
}

exports.register =  async(req, res, next) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 5)
        const newUser = new User({
            ...req.body,
            password: hash,
        })
        await newUser.save();
        res.status(201).send("User has been created!!!")
    } catch (err) {
        next(err)
    }
}

exports.login =  (async(req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username})
        // console.log(user)
        if(!user) return next(AppError('User not found !!!', 404))
        const isCorrect = bcrypt.compareSync(req.body.password, user.password)
        if(!isCorrect) return next(AppError('Wrong password or username', 400))

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        }, 
        process.env.JWT_SECRET);
        
        res.cookie('accessToken', token, {
            httpOnly: true,
        })
        console.log("cookie")
        user.password = undefined
        res.status(201).send(user)

        return token
    } catch (err) {        
        next(err)
    }
})

exports.logout =  (async(req, res) => {
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
    }).status(200).send("Logged Out !!!")
})
