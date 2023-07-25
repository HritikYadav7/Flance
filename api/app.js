// const path = require('path');
const express = require('express');
const helmet = require('helmet');

// import userRoter from "./routes/userRoutes"
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
// const gigRouter = require('./routes/gigRoutes');
// const orderRouter = require('./routes/orderRoutes');
// const reviewRouter = require('./routes/reviewRoutes');
// const messageRouter = require('./routes/messasgeRoutes');
// const conversationRouter = require('./routes/conversationRoutes');

const app = express();

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
// app.use('/api/gigs', gigRouter);
// app.use('/api/orders', orderRouter);
// app.use('/api/reviews', reviewRouter);
// app.use('/api/messages', messageRouter);
// app.use('/api/conversations', conversationRouter);

module.exports = app;
