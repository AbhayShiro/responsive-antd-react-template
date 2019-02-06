import React, { Component } from "react";

import PropTypes from "prop-types";
import { Layout } from "antd";

const { Header } = Layout;

class config extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Header style={{ background: "#fff", padding: 0 }} />;
  }
}

export default config;
