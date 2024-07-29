const AppError = require('./../utils/AppError.js')
const Conversation = require('./../models/conversationModel.js')

exports.createConversation = async (req, res, next) => {
  // console.log(req.body.to)
  const newConversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userID,
    sellerId: req.isSeller ? req.userID : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userID,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
    // sellerId:req.to,
    // ...req.body,
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(201).send(savedConversation);
  } catch (err) {
    next(err);
  }
};

exports.updateConversation = async (req, res, next) => {
  // console.log("This is updateConversation")
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          readBySeller: true,
          readByBuyer: true,
          // ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );
  // console.log(updatedConversation)
    res.status(200).send(updatedConversation);
  } catch (err) {
    next(err);
  }
};

exports.getSingleConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    if (!conversation) return next(AppError("Not found!",404));
    res.status(200).send(conversation);
  } catch (err) {
    next(err);
  }
};

exports.getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userID } : { buyerId: req.userID }
    ).sort({ updatedAt: -1 });
    res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};
