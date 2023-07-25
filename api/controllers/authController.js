const User = require('./../models/userModel')

exports.register =  async(req, res) => {
    try {
        const newUser = new User({
            username:"test",
            email:"test",
            password:"test",
            country:"test",
        })
        await newUser.save();
        res.status(201).send("User has benn created!!!")
    } catch (err) {
        res.status(500).send("something went wrong!!!")
    }
}

// exports.login =  (async(req, res) => {
    
// })
// exports.logout =  (async(req, res) => {
    
// })