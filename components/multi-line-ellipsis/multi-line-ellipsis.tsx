import React from "react";
import classNames from "classnames";

export interface MultiLineEllipsisProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
}

export class MultiLineEllipsis extends React.Component<MultiLineEllipsisProps> {
  public static defaultProps: Partial<MultiLineEllipsisProps> = {
    prefixCls: "r-polymer-multi-line-ellipsis",
  };

  public render() {
    const {
      style,
      className,
      prefixCls,
      children,
    } = this.props;

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-wrap`]: "wrap",
    });

    return (
      <div
        style={style}
        className={classes}
      >
        { children }
      </div>
    );
  }
}

export default MultiLineEllipsis;
