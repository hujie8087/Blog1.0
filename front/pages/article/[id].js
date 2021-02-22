import React from "react";
import { Row, Col, Breadcrumb, Affix } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import Author from "../../components/Author";
import Tocify from "../../components/tocify.tsx";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import axios from "axios";
import servicePath from "../../config/apiUrl";
import "markdown-navbar/dist/navbar.css";
import "./index.scss";
import "./detail.scss";

function Detailed(detail) {
  const tocify = new Tocify();
  const renderer = new marked.Renderer();

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id=${anchor} href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n `;
  };

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false, //markedown格式容错
    sanitize: false, //是否过滤html标签
    table: true, //是否支持表格
    breaks: false, //换行符
    smartLists: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
  let html = marked(detail.content);

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
            <Breadcrumb.Separator />
            <Breadcrumb.Item>文章详情</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div>
          <div className="detailed-title">{detail.title}</div>
          <div className="list-icon center">
            <span>
              <CalendarOutlined />
              {detail.addTime}
            </span>
            <span>
              <FolderOutlined />
              {detail.typeName}
            </span>
            <span>
              <FireOutlined />
              {detail.view_count}
            </span>
          </div>
          <div
            className="detailed-content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </Col>
      <Col xs={0} sm={0} md={4} lg={5} xl={4} className="col-right">
        <Author />
        <Affix>
          <div className="comm-box">
            <div className="nav-title">文章目录</div>
            {tocify && tocify.render()}
            {/* <MarkdownNavbar
              source={detail.content}
              ordered={false}
            ></MarkdownNavbar> */}
          </div>
        </Affix>
      </Col>
    </Row>
  );
}
Detailed.getInitialProps = async (context) => {
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleById + id).then((res) => {
      resolve(res.data.data[0]);
    });
  });

  return await promise;
};
export default Detailed;
