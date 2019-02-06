import React, { Component } from "react";

import PropTypes from "prop-types";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;

class config extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Sider
        breakpoint="lg"
        className="e-right-sider"
        collapsible={true}
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default config;
