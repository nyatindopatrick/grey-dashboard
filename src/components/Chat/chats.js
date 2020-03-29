import React, { useState, useEffect } from "react";
import { Form, Button, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

export default function Chats({ activeChat, getUserName }) {
  // eslint-disable-next-line no-unused-vars
  const [inputs, setInputs] = useState(null);
  const [form] = Form.useForm();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(inputs);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div>
      <div className="chat_head">
        <h3>Name</h3>
      </div>
      <div className="chats_messages">
      <div className="speech-bubble">The shit is real</div>
      <div className="receiver-bubble">Shit is always real.</div>
      </div>
      <form className="msg-form" onSubmit={handleSubmit}>
        <Input.TextArea
          placeholder="Type message..."
          name="msg"
          onChange={handleChange}
        />
        <button type="submit">
          <img
            src="https://image.flaticon.com/icons/svg/60/60525.svg"
            alt="send"
          />
          <span>send</span>
        </button>
      </form>
    </div>
  );
}
