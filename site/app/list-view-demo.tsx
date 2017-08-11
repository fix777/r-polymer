import React from "react";

import { Table } from "antd";

// import { ListView } from "./../../components";
import "./../../components/list-view/style";

import { ListView } from "./../../lib";
// import "./../../lib/cascade-transfer/style/index.css";

import "./../style/app.css";

export default class ListViewDemo extends React.Component {
  render() {
    return (
      <div className="app">
        <ListView
          dataSource={[
            {
              type: "title",
              dataSource: [
                {
                  type: "major",
                  text: "Major Title Major Title Major Title Major Title"
                },
                {
                  type: "sub",
                  text: "Sub Title Sub Title Sub Title"
                },
              ],
            },
            {
              type: "step",
              stepsProps: {
                current: 1,
              },
              dataSource: [
                {
                  title: "Step 1",
                  description: "Step 1 description.",
                },
                {
                  title: "Step 2",
                  description: "Step 2 description.",
                },
                {
                  title: "Step 3",
                  description: "Step 3 description.",
                },
              ],
            },
            {
              type: "collapse",
              dataSource: [
                {
                  header: "Panel 1",
                  content: (
                    <Table
                      columns={[
                        {
                          title: "Column A",
                        },
                        {
                          title: "Column B",
                        },
                        {
                          title: "Column C",
                        },
                      ]}
                    />
                  ),
                },
                {
                  header: "Panel 2",
                  content: "Panel 2",
                },
              ],
            },
          ]}
        />
      </div>
    );
  }
}
