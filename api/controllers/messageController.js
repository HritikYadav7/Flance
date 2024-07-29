const Conversation = require('./../models/conversationModel.js')
const Message = require('./../models/messageModel.js')
const AppError = require('./../utils/AppError.js')


exports.createMessage = async (req, res, next) => {
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    userId: req.userID,
    desc: req.body.desc,
  });
  try {
    const savedMessage = await newMessage.save();
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );

    res.status(201).send(savedMessage);
  } catch (err) {
    next(err);
  }
};
exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    // console.log(messages)
    // console.log("This is getMessages")
    res.status(200).send(messages);
  } catch (err) {
    next(err);
  }
};
