// const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser')
// import userRoter from "./routes/userRoutes"
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
// const globalErrorHandler = require('./controllers/errorController');
const cors = require('cors')
const gigRouter = require('./routes/gigRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const orderRouter = require('./routes/orderRoutes');
const conversationRouter = require('./routes/conversationRoutes');
const messageRouter = require('./routes/messageRoutes');

// const orderRouter = require('./routes/orderRoutes');

const app = express();

app.use(cors({origin:"http://localhost:5173", credentials:true}))
// app.use(cors())
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", 'data:', 'blob:'],
        baseUri: ["'self'"],
        fontSrc: ["'self'", 'https:', 'data:'],
        scriptSrc: ["'self'", 'https://*.cloudflare.com'],
        scriptSrc: ["'self'", 'https://stripe.com'],
        scriptSrc: ["'self'", 'http:', 'https://*.mapbox.com', 'data:'],
        frameSrc: ["'self'", 'https://stripe.com'],
        objectSrc: ["'none'"],
        styleSrc: ["'self'", 'https:', 'unsafe-inline'],
        workerSrc: ["'self'", 'data:', 'blob:'],
        childSrc: ["'self'", 'blob:'],
        imgSrc: ["'self'", 'data:', 'blob:'],
        connectSrc: ["'self'", 'blob:', 'https://*.mapbox.com'],
        upgradeInsecureRequests: [],
      },
    })
  );
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
app.use('/api/gigs', gigRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/orders', orderRouter);
app.use('/api/conversations', conversationRouter);
app.use('/api/messages', messageRouter);

// app.use('/api/orders', orderRouter);

app.use((err, req, res, next)=> {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong !!!"
    return res.status(errorStatus).send(errorMessage)
    next()
});

module.exports = app;
