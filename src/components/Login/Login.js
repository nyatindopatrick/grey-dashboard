import React from "react";
import "./styles/style.css";
import { Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-main">
      <div className="split left">
        <div className="centered"></div>
      </div>

      <div className="split right">
        <div className="center-right">
          <h3>DEVDASH</h3>
          <div className="login_inputs">
            <Input size="large" placeholder="Email" prefix={<UserOutlined />} />
            <Input.Password size="large" placeholder="Password" />
          </div>
          <div className="login-buttons">
            <Link to="/">
              <Button className="btn_login" size="large">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
