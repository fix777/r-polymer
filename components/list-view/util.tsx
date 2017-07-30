import React from "react";

import Title from "./title";
import Step from "./step";
import Collapse from "./collapse";
import { ListViewItem } from "./list-view";

export function renderItem(listViewItem: ListViewItem, index: number) {
  const { type, ...others } = listViewItem;
  const props = { key: `${type}-${index}`, ...others };
  switch (type) {
    case "title":
      return <Title {...props} />;
    case "step":
      return <Step {...props} />;
    case "collapse":
      return <Collapse {...props} />;
    default:
      return null;
  }
}
