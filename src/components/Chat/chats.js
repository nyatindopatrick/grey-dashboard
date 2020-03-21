import React from "react";

export default function Chats({ activeChat, getUserName }) {
  // eslint-disable-next-line no-unused-vars
  const indent = n => (n === "me" ? "chat_text" : "chat_text_2");

  console.log();
  return (
    <div className="chat_body">
      {activeChat &&
        activeChat.message.map(({ time, msg, user }, i) => (
          <div className={indent(user)} key={i}>
            <p>{msg}</p>
          </div>
        ))}
    </div>
  );
}
