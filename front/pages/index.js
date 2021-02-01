import { Col, Row, List, message } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import Author from "../components/Author";
import "../styles/index.scss";

function Home() {
  const [homeList, setHomeList] = useState([
    {
      title: "文章标题一",
      context: "的范德萨卡机范德萨开服活动范德萨艰苦奋斗撒反倒是卡金凤凰",
    },
    {
      title: "文章标题二",
      context: "的范德萨卡机范德萨开服活动范德萨艰苦奋斗撒反倒是卡金凤凰",
    },
    {
      title: "文章标题三",
      context: "的范德萨卡机范德萨开服活动范德萨艰苦奋斗撒反倒是卡金凤凰",
    },
    {
      title: "文章标题四",
      context: "的范德萨卡机范德萨开服活动范德萨艰苦奋斗撒反倒是卡金凤凰",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const getHomeListInfo = async () => {
    const res = await getHomeList();
    if (res.code === 0) {
      setLoading(false);
      setHomeList(res);
    } else {
      message.error(res.msg || "网络繁忙，请稍后重试");
    }
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="container">
      <Row className="main" type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10} className="col-left">
          <List
            header={<div>最新文章</div>}
            dataSource={homeList}
            loading={loading}
            itemLayout="vertical"
            className="list-wapper"
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span>
                    <CalendarOutlined />
                    2021-01-29
                  </span>
                  <span>
                    <FolderOutlined />
                    视频教程
                  </span>
                  <span>
                    <FireOutlined />
                    100人
                  </span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          ></List>
        </Col>
        <Col xs={0} sm={0} md={4} lg={5} xl={4} className="col-right">
          <Author />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
