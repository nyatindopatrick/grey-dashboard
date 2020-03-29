import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import "./styles/style.css";
import { Input, Button, Avatar } from "antd";
import Moment from "react-moment";
import ChatBody from "./chats";
import { PlusOutlined } from "@ant-design/icons";

import NewChat from "./chooseChat";

const { Search } = Input;
const socket = socketIOClient("http://localhost:4000");

const LiveChat = () => {
  const [chats, setChats] = useState(null);
  const [newChat, setNewChat] = useState(false);
  const [activeChat, setActiveChat] = useState(
    chats ? chats[chats.length - 1] : null
  );
  const [text, setText] = useState(null);
  useEffect(() => {
    socket.emit("initial_data");
    socket.on("get_data", data => setChats(data));
  }, []);
  const getUserName = n => {
    let myUser;
    // eslint-disable-next-line array-callback-return
    n.map(({ user }) => {
      if (user !== "me") {
        return (myUser = user);
      }
    });
    return myUser;
  };
  const handleActive = data => {
    setNewChat(false);
    setActiveChat(data);
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };
  const handleChat = () => {
    setNewChat(true);
  };
  console.log(newChat);
  const handleSubmit = e => {
    socket.emit("initial_data");
    socket.emit("create_chat", text);
  };
  return (
    <div className="main_chat">
      <div className="first_column">
        <div className="toolbar">
          <Search
            placeholder="search..."
            onSearch={value => console.log(value)}
            style={{ width: "100%" }}
          />
          <Button onClick={handleChat} icon={<PlusOutlined />}></Button>
        </div>
        <div className="chats">
          {
            <div className="chat-item">
              <div className="avatar">
                <div></div>
                <Avatar
                  size="large"
                  src="https://image.flaticon.com/icons/svg/709/709722.svg"
                />
              </div>
              <div>
                <h5>New Chat</h5>
                <p>The shit is real</p>
              </div>
            </div>
          }
          <div className="chat-item">
            <div className="avatar">
              <div></div>
              <Avatar
                size="large"
                src="https://images.generated.photos/H2MwVK5amG2TrXLdN2weH_b2dVRQyRp8OazrZtB9B4M/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/ODQyNTMuanBn.jpg"
              />
            </div>
            <div>
              <h5>Ashley Achieng</h5>
              <p>The shit is real</p>
            </div>
          </div>
        </div>
      </div>
      <div className="chat_body">
        <ChatBody />
      </div>
    </div>
  );
};

export default LiveChat;
