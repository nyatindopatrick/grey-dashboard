import React, { useState, useEffect } from "react";
import "./styles/style.css";
import { Input } from "antd";
import { messages } from "./chatsData";
import Moment from "react-moment";
import ChatBody from "./chats";

const { Search } = Input;

const LiveChat = () => {
  const [chats, setChats] = useState(null);
  const [activeChat, setActiveChat] = useState(
    chats ? chats[chats.length - 1] : null
  );
  useEffect(() => {
    setChats([...messages]);
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
    setActiveChat(data);
  };
  // boxShadow:
  // "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)"
  return (
    <div className="main_chat">
      <div className="first_column">
        <Search
          placeholder="search..."
          onSearch={value => console.log(value)}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <div className="chats_col">
          {chats &&
            chats.map((item, i) => {
              const { message } = item;
              const userName = getUserName(message);
              return (
                <div
                  className="chat_item"
                  key={i}
                  onClick={() => handleActive(item)}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/61/61498.png"
                    alt="user"
                  />
                  <div>
                    <h4>{`${userName}`}</h4>
                    <p>{message[message.length - 1].msg}</p>
                  </div>
                  <p>
                    <small>
                      <Moment fromNow>
                        {message[message.length - 1].time}
                      </Moment>
                    </small>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="middle_column">
        <div className="chat_header">
          <div>
            <img
              src="https://image.flaticon.com/icons/png/512/61/61498.png"
              alt=""
            />
            <div>
              <h4>Ashley Young</h4>
              <p>Online</p>
            </div>
          </div>

          <img
            className="ellipsis"
            src="https://image.flaticon.com/icons/svg/545/545704.svg"
            alt=""
          />
        </div>
        <ChatBody activeChat={activeChat} getUserName={getUserName} />
      </div>
      <div></div>
    </div>
  );
};

export default LiveChat;
