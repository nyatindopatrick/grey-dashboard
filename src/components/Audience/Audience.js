import React from "react";
import "./Style/style.css";
import { Button, Menu, Dropdown, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Table from './Table'
const { Search } = Input;

function handleMenuClick(e) {
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">age</Menu.Item>
    <Menu.Item key="2">phone</Menu.Item>
    <Menu.Item key="3">email</Menu.Item>
  </Menu>
);

const Audience = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>Audience</h2>
        <Button shape="round" size="large">
          Devs Co.
        </Button>
      </div>
      <div className="options">
        <div className="menu-one">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200, borderRadius: "10px" }}
          />
          <Dropdown overlay={menu}>
            <Button shape="round" size="large">
              Actions <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className="menu-two">
          <Button shape="round" size="large">
            Import
          </Button>
          <Button shape="round" size="large">
            Export
          </Button>
        </div>
      </div>
      <Table/>
    </div>
  );
};

export default Audience;
