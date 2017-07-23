import React from "react";

import { CascadeTransfer } from "./../../lib";

import "./../style/app.css";

export default class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <h1>hello, world</h1>
        <CascadeTransfer />
      </div>
    );
  }
}
