import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function({ layout, component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        React.createElement(
          layout,
          props,
          React.createElement(component, props)
        )
      }
    />
  );
}
