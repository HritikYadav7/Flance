// const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser')
// import userRoter from "./routes/userRoutes"
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const globalErrorHandler = require('./controllers/errorController');
const cors = require('cors')

// const gigRouter = require('./routes/gigRoutes');
// const orderRouter = require('./routes/orderRoutes');
// const reviewRouter = require('./routes/reviewRoutes');
// const messageRouter = require('./routes/messasgeRoutes');
// const conversationRouter = require('./routes/conversationRoutes');

const app = express();

app.use(cors({origin:"http://localhost:5173", credentials:true}))
// app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
// app.use('/api/gigs', gigRouter);
// app.use('/api/orders', orderRouter);
// app.use('/api/reviews', reviewRouter);
// app.use('/api/messages', messageRouter);
// app.use('/api/conversations', conversationRouter);

app.use(globalErrorHandler);

module.exports = app;
