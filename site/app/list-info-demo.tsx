import React from "react";

import { ListInfo } from "./../../components";
import "./../../components/list-info/style";

// import { ListView } from "./../../lib";
// import "./../../lib/cascade-transfer/style/index.css";

import "./../style/app.css";

export default class ListInfoDemo extends React.Component {
  public render() {
    return (
      <div className="app">
        <ListInfo
        />
      </div>
    );
  }
}
