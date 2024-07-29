// const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app');



dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
// mongoose.connect(process.env.DATABASE_LOCAL)
mongoose.connect(DB)
.then((con) => {
    console.log("DB connection successful ...")
})


app.listen(8800, ()=>{
    console.log("Server is running on port 8800")
})