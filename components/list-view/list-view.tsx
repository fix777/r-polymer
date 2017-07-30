import React from "react";
import classNames from "classnames";

import { renderItem } from "./util";

export type ListViewItemType = "title" | "step" | "collapse";

export interface ListViewItem {
  type: ListViewItemType;
  dataSource: any[];
  [prop: string]: any;
}

export interface ListViewProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  dataSource: ListViewItem[];
}

export class ListView extends React.Component<ListViewProps> {
  public static defaultProps: Partial<ListViewProps> = {
    prefixCls: "r-polymer-list-view",
  };

  public render() {
    const {
      style,
      className,
      prefixCls,
      dataSource,
    } = this.props;

    if (!dataSource.length) return null;

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-wrapper`]: "wrapper",
    });

    return (
      <div
        style={style}
        className={classes}
      >
        {
          dataSource.map(renderItem)
        }
      </div>
    );
  }
}

export default ListView;
