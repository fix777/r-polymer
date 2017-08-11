import React from "react";

import Tile from "./../../components/tile";
import "./../../components/tile/style";

const TileDemo = () => (
  <Tile
    style={{ width: 200, margin: "20vh auto" }}
    // title="title title"
    details={[
      {
        label: "hello:",
        description: "hello world hello world hello world hello world hello world"
      },
    ]}
  />
);

export default TileDemo;
