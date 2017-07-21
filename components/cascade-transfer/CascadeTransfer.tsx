import React from "react";
// import { Button } from "antd";
import { Select, Button } from "antd";

const { Option } = Select;

class CascadeTransfer extends React.Component {
  public render() {
    return (
      <div
        className="rantd-button"
      >
        <h1>hello</h1>
        <Button>world</Button>
        <Select defaultValue="lucy" style={{ width: 120 }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    );
  }
}

export default CascadeTransfer;
