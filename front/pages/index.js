import { Col, Row } from "antd";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="main" type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          左侧
        </Col>
        <Col xs={0} sm={0} md={4} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  );
}
