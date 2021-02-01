import { useRouter } from "next/dist/client/router";
import React from "react";
import { Row, Col, Breadcrumb } from "antd";
import Author from "../../components/Author";
import "./index.scss";

function Article() {
  const router = useRouter();

  const { id } = router.query;

  return (
    <Row className="main" type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={10} xl={10} className="col-left">
        <div className="bread-div">
          <Breadcrumb separator="">
            <Breadcrumb.Item>当前位置</Breadcrumb.Item>
            <Breadcrumb.Separator>:</Breadcrumb.Separator>
            <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item href="/article">文章</Breadcrumb.Item>
            <Breadcrumb.Item>文章详情</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {id}
      </Col>
      <Col xs={0} sm={0} md={4} lg={5} xl={4} className="col-right">
        <Author />
      </Col>
    </Row>
  );
}

export default Article;
