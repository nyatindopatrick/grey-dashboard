import React from "react";
import "./styles/style.css";
import { Avatar } from "antd";

const Data = () => {
  const counter = item => {
    return /000$/.test(item) ? item.toString().replace("000", "K") : item;
  };
  return (
    <div>
      <div className="top-card">
        <h2>Analytics Overview</h2>
        <div className="analytic_container">
          {cards.map(({ name, icon, count }, i) => {
            return (
              <div className="analytic_card">
                <h3>{name}</h3>
                <Avatar
                  size="large"
                  style={{
                    background: "#f8f8ff"
                  }}
                  src={icon}
                />
                <h1>{counter(count)}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Data;

const cards = [
  {
    name: "SENT MESSAGES",
    icon: "https://image.flaticon.com/icons/svg/2343/2343651.svg",
    count: 15000
  },
  {
    name: "RECEIVED MESSAGES",
    icon: "https://image.flaticon.com/icons/svg/263/263096.svg",
    count: 4721
  },
  {
    name: "FAILED MESSAGES",
    icon: "https://image.flaticon.com/icons/svg/189/189678.svg",
    count: 94
  },
  {
    name: "BALANCE",
    icon: "https://image.flaticon.com/icons/svg/2746/2746100.svg",
    count: 800
  }
];
