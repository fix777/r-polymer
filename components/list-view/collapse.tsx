import React from "react";
import { Collapse } from "antd";
import { CollapseProps, CollapsePanelProps } from "antd/lib/collapse/collapse";
import classNames from "classnames";

const { Panel } = Collapse;

export interface PanelProps extends CollapsePanelProps {
  content: string | React.ReactNode;
}

export interface RCollapseProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  collapseProps?: CollapseProps;
  dataSource: PanelProps[];
}

export class RCollapse extends React.Component<RCollapseProps> {
  public static defaultProps: Partial<RCollapseProps> = {
    prefixCls: "r-polymer-collapse",
  };

  public render() {
    const {
      style,
      className,
      prefixCls,
      collapseProps,
      dataSource,
    } = this.props;

    const nextCollapseProps: CollapseProps = {
      bordered: false,
      defaultActiveKey: Array(dataSource.length).fill(0).map((key, index) => (key + index).toString()),
      ...collapseProps
    };

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-wrapper`]: "wrapper",
    });

    return (
      <div
        style={style}
        className={classes}
      >
        <Collapse {...nextCollapseProps}>
          {
            dataSource.map((step, index: number) => {
              const { content, ...otherStepProps } = step;
              return (<Panel key={index.toString()} {...otherStepProps}>{ content }</Panel>);
            })
          }
        </Collapse>
      </div>
    );
  }
}

export default RCollapse;
