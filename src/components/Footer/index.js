import React, { Component } from "react";

import PropTypes from "prop-types";
import { Layout } from "antd";

const { Footer } = Layout;

class config extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        Abhay Shiro &reg; {new Date().getFullYear()}
      </Footer>
    );
  }
}

export default config;
