import { Col, Row, List, message } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import servicePath from "../config/apiUrl";
import Author from "../components/Author";
import "../styles/index.scss";

function Home(list) {
  const [homeList, setHomeList] = useState(list.data);
  const [loading, setLoading] = useState(false);

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
                <div className="list-title">
                  <Link href={{ pathname: `article/${item.id}` }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span>
                    <CalendarOutlined />
                    {item.addTime}
                  </span>
                  <span>
                    <FolderOutlined />
                    {item.typeName}
                  </span>
                  <span>
                    <FireOutlined />
                    {item.view_count}人
                  </span>
                </div>
                <div className="list-context">{item.introduce}</div>
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

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then((res) => {
      resolve(res.data);
    });
  });

  return await promise;
};

export default Home;
