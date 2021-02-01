import React from "react";
import { Avatar, Divider } from "antd";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import "./index.scss";

function Author() {
  return (
    <div className="author-div comm-box">
      <div className="author-avatar">
        <Avatar size={100}></Avatar>
      </div>
      <div className="author-introduction">专注前端开发20年</div>
      <Divider>社交账号</Divider>
      <Avatar className="account" icon={<GithubOutlined />} size={28} />
      <Avatar className="account" icon={<QqOutlined />} size={28} />
      <Avatar className="account" icon={<WechatOutlined />} size={28} />
    </div>
  );
}

export default Author;
