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
                <i className={icon}></i>
              <span>
              {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="tools">
        <li>
          <Link to="/">
            <Tooltip placement="bottom" title="settings">
              <i className="fas fa-cog"></i>
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <Tooltip placement="bottom" title="logout">
              <i className="fas fa-power-off"></i>
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
    icon: "fas fa-users"
  },
  {
    label: "Live chat",
    link: "/",
    icon: "far fa-comment"
  },
  {
    label: "Automation",
    link: "/automation",
    icon: "fab fa-react"
  },
  {
    label: "Data",
    link: "/",
    icon: "fas fa-chart-bar"
  }
];
