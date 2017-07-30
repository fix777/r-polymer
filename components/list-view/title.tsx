import React from "react";
import classNames from "classnames";

export type TitleItemType = "major" | "sub";

export interface TitleItem {
  type: TitleItemType;
  text: string | React.ReactElement<any>;
}

export interface TitleProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  dataSource: TitleItem[];
}

export class Title extends React.Component<TitleProps> {
  public static defaultProps: Partial<TitleProps> = {
    prefixCls: "r-polymer-title",
  };

  public render() {
    const {
      style,
      className,
      prefixCls,
      dataSource,
    } = this.props;

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-wrapper`]: "wrapper",
    });

    return (
      <div
        style={style}
        className={classes}
      >
        {
          dataSource.map((titleItem, index: number) => {
            const { type, text } = titleItem;
            const itemClass = classNames(prefixCls, { [`${prefixCls}-${type}`]: type });
            return <div key={index} className={itemClass}>{ text }</div>;
          })
        }
      </div>
    );
  }
}

export default Title;
