import { Button, Col, Menu, Row } from "antd";
import React, { useState } from "react";
import "./index.scss";

function Header() {
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} md={4}>
          <a href="/" className="logo">
            <img src="/logo.png" alt="" />
          </a>
        </Col>
        <Col xs={0} md={14} lg={10}>
          <Menu
            mode="horizontal"
            onClick={(e) => handleClick(e)}
            selectedKeys={[current]}
            style={{ textAlign: "right" }}
          >
            <Menu.Item key="home">首页</Menu.Item>
            <Menu.Item key="article">文章</Menu.Item>
            <Menu.Item key="video">视频</Menu.Item>
            <Menu.Item key="life">生活</Menu.Item>
            <Menu.Item key="about">关于</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
