import React from "react";
import "./style/style.css";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

export default function Navbar() {
  return (
    <nav>
      <div className="navigation">
        <ul className="nav-options">
          {navigation.map(({ label, link, icon }, i) => (
            <li key={i}>
              <Link to={link}>
                <img src={icon} alt="" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="tools">
          <li>
            <Link to="/">
              <Tooltip placement="bottom" title="settings">
                <img
                  src="https://image.flaticon.com/icons/svg/2099/2099058.svg"
                  alt=""
                />
              </Tooltip>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <Tooltip placement="bottom" title="logout">
                <img
                  src="https://image.flaticon.com/icons/svg/402/402593.svg"
                  alt=""
                />
              </Tooltip>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const navigation = [
  {
    label: "Audience",
    link: "/",
    icon: "https://image.flaticon.com/icons/svg/615/615075.svg"
  },
  {
    label: "Live chat",
    link: "/chat",
    icon: "https://image.flaticon.com/icons/svg/2462/2462719.svg"
  },
  {
    label: "Automation",
    link: "/automation",
    icon: "https://image.flaticon.com/icons/svg/2289/2289213.svg"
  },
  {
    label: "Data",
    link: "/",
    icon: "https://civicconnect.com/wp-content/uploads/2016/07/Data.png"
  }
];
