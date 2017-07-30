import React from "react";

// import CascadeTransfer from "./../../components/cascade-transfer";
// import "./../../components/cascade-transfer/style";

import { CascadeTransfer } from "./../../lib";
import "./../../lib/cascade-transfer/style/index.css";

// import "./../style/app.css";

export default class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <CascadeTransfer
          style={{
            fontSize: "10px",
            maxWidth: "40em",
            padding: "4px",
          }}
          selects={[
            {
              key: 0,
              selectProps: {
                style: {
                  width: "100%",
                },
              },
              optionProps: [
                {
                  title: "Jack",
                  value: "jack",
                },
                {
                  title: "Felix",
                  value: "felix",
                },
              ],
            },
            {
              key: 1,
              selectProps: {
                style: {
                  width: "100%",
                },
              },
              optionProps: [
                {
                  title: "Tom",
                  value: "tom",
                },
                {
                  title: "Jerry",
                  value: "jerry",
                },
              ],
            },
            {
              key: 2,
              selectProps: {
                style: {
                  width: "100%",
                },
              },
              optionProps: [
                {
                  title: "Tom",
                  value: "tom",
                },
                {
                  title: "Jerry",
                  value: "jerry",
                },
              ],
            },
            {
              key: 3,
              selectProps: {
                style: {
                  width: "100%",
                },
              },
              optionProps: [
                {
                  title: "Tom",
                  value: "tom",
                },
                {
                  title: "Jerry",
                  value: "jerry",
                },
              ],
            },
            {
              key: 4,
              selectProps: {
                style: {
                  width: "100%",
                },
              },
              optionProps: [
                {
                  title: "Tom",
                  value: "tom",
                },
                {
                  title: "Jerry",
                  value: "jerry",
                },
              ],
            },
          ]}
          showTransfer={false}
          transferProps={{
            dataSource: [],
            targetKeys: [],
          }}
        />
      </div>
    );
  }
}
