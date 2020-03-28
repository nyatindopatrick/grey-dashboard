const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const chatSchema = new Schema({
  userId: String,
  messages: [{ msg: String, time: Date, user: String }],
  createdAt: { type: Date, default: new Date() }
});

module.exports = model("Chat", chatSchema);
