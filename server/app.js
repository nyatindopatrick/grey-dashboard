const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
require("dotenv").config();
const Chats = require("./models/Chats");

mongoose.connect(
  process.env.DB_KEY,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, success) => {
    if (err) throw err;
    console.log("database working!");
  }
);
// our localhost port
const port = process.env.PORT || 4000;
const app = express();
// our server instance
const server = http.createServer(app);
// This creates our socket using the instance of the server
const io = socketIO(server);
io.on("connection", socket => {
  console.log("New client connected");
  //console.log(socket);
  // Returning the initial data of food menu from FoodItems collection
  socket.on("initial_data", () => {
    Chats.find({}).then(docs => {
      console.log(docs)
      io.sockets.emit("get_data", docs);
    });
  });
  // creating a new chat
  socket.on("create_chat", order => {
    console.log(order);
    const newChat = new Chats({
      messages: [{ msg: order.msg, time: new Date(), user: "me" }],
      createdAt: new Date(),
      userId: "me"
    });
    newChat.save().then(newdoc => {
      // Emitting event to update the Kitchen opened across the devices with the realtime order values
      io.sockets.emit("change_data");
    });
  });

  // Edit a chat document on reply of your message
  socket.on("reply_chat", reply => {
    Chats.update({ _id: reply._id }, { $push: { messages: reply } }).then(
      updatedDoc => {
        // Socket event to update current messages
        io.sockets.emit("change_data");
      }
    );
  });

  // Order completion, gets called from /src/main/Kitchen.js
  socket.on("mark_done", id => {
    Chats.update({ _id: id }, { $inc: { ordQty: -1, prodQty: 1 } }).then(
      updatedDoc => {
        //Updating the different Kitchen area with the current Status.
        io.sockets.emit("change_data");
      }
    );
  });

  // disconnect is fired when a client leaves the server
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
/* Below mentioned steps are performed to return the Frontend build of create-react-app from build folder of backend Comment it out if running locally*/
// app.use(express.static("build"));
// app.use("/kitchen", express.static("build"));
// app.use("/updatepredicted", express.static("build"));
server.listen(port, () => console.log(`Listening on port ${port}`));
