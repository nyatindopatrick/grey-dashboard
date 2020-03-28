const Chats = require("../models/Chats");

exports.postChat = async request => {
  const { userId, message } = request;
  const newChat = new Chats({
    userId,
    message: [{ msg: message, sender: userId, time: new Date() }]
  });
  await newChat.save();
};
