import React from "react";
import { Steps } from "antd";
import { StepsProps } from "antd/lib/steps";
import classNames from "classnames";

const { Step } = Steps;

export type StepItemStatus = "wait" | "process" | "finish" | "error";

export interface StepItem {
  status?: StepItemStatus;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: string | React.ReactNode;
}

export interface RStepProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  stepsProps?: StepsProps;
  dataSource: StepItem[];
}

export class RStep extends React.Component<RStepProps> {
  public static defaultProps: Partial<RStepProps> = {
    prefixCls: "r-polymer-step",
  };

  public render() {
    const {
      style,
      className,
      prefixCls,
      stepsProps,
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
        <Steps {...stepsProps}>
          {
            dataSource.map((step, index: number) => (<Step key={index} {...step} />))
          }
        </Steps>
      </div>
    );
  }
}

export default RStep;
