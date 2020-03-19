import React, { useState, useEffect } from "react";
import { Progress, Button, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Moment from "react-moment";
import "./style/style.css";
import data from "./data.json";

const Automation = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    setPosts([...data.articles]);
  }, []);

  return (
    <div className="main_auto">
      <div className="auto_header">
        <h2>Broadcast Message</h2>
        <span>Sending Messages...(363/532)</span>
      </div>
      <Progress
        className="progress"
        strokeColor={{
          from: "#3096f9",
          to: "#1565c0"
        }}
        percent={76.9}
        status="active"
      />
      <div className="msg-filter">
        <Button type="">Draft</Button>
        <Button>Scheduled</Button>
        <Button type="">Delivered</Button>
        <Button type="" shape="circle" icon={<PlusOutlined />} size="large" />
      </div>
      <div>
        {posts &&
          posts.map(({ title, description, url, content, publishedAt }, i) => (
            <Card
              key={i}
              title={title}
              extra={<Moment fromNow>{publishedAt}</Moment>}
              className="news_card"
            >
              <a href={url}>{content}</a>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Automation;
