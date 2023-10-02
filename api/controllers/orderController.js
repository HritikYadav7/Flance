const AppError = require('./../utils/AppError.js')
const Order = require('./../models/orderModel.js')
const Gig = require('./../models/gigModel.js')
const Stripe = require('stripe')

exports.createOrder = async (req, res, next) => {
    try{
        // console.log(req.params.gigId)
        const gig = await Gig.findById(req.params.gigId);
        const newOrder = new Order({
            gigId: gig._id,
            img: gig.cover,
            title:gig.title,
            price:gig.price,
            buyerId:req.userID,
            sellerId:gig.userId,
            payment_intent:"temporary"
        })
        await newOrder.save();
        res.status(200).send("successful")
    }catch(err){
        next(err)
    }
}

exports.intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);

  const gig = await Gig.findById(req.params.id);
  console.log(gig)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "usd",
    // payment_method_types : 'card',
    automatic_payment_methods: {
      enabled: true,
    },
  });
  console.log(req.userID)
  console.log("This is Intent")

  const newOrder = new Order({
    gigId: gig._id,
    img: gig.cover,
    title: gig.title,
    buyerId: req.userID,
    sellerId: gig.userId,
    price: gig.price,
    payment_intent: paymentIntent.id,
  });

  await newOrder.save();

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userID } : { buyerId: req.userID }),
      isCompleted: true,
    });
    // console.log(req.userID)
    // console.log(orders)
    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};
exports.confirm = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};
