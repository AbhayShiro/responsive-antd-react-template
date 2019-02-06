import React, { Component } from "react";
import PropTypes from "prop-types";
import LoadingBar from "react-redux-loading-bar";
import { Layout, Menu, Icon } from "antd";

import Sider from "../components/Sider";
import Footer from "../components/Footer";
import Header from "../components/Header";

import ESider from "../components/Forms/Sider";

const { Content } = Layout;

class AnotherLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout className="contentbox">
        <LoadingBar />
        <Sider />
        <Layout>
          <Header />
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer />
        </Layout>
        <ESider />
      </Layout>
    );
  }
}

export default AnotherLayout;
