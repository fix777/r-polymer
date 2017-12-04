import React, { PureComponent, ReactNode, CSSProperties } from "react";
import { Steps } from "antd";
import { StepsProps } from "antd/lib/steps";
import classNames from "classnames";

const { Step } = Steps;

export type StepItemStatus = "wait" | "process" | "finish" | "error";

export interface StepItem {
  stepKey?: string;
  status?: StepItemStatus;
  title: string | ReactNode;
  description?: string | ReactNode;
  icon?: string | ReactNode;
}

export interface RStepProps {
  style?: CSSProperties;
  className?: string;
  prefixCls?: string;
  stepsProps?: StepsProps;
  dataSource: StepItem[];
}

export class RStep extends PureComponent<RStepProps> {
  static defaultProps: Partial<RStepProps> = {
    prefixCls: "r-polymer-step"
  };

  render() {
    const { style, className, prefixCls, stepsProps, dataSource } = this.props;

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-wrapper`]: "wrapper"
    });

    return (
      <div style={style} className={classes}>
        <Steps {...stepsProps}>
          {dataSource.map(({ stepKey, ...restStepItemProps }) => (
            <Step
              key={restStepItemProps[stepKey || "id"]}
              {...restStepItemProps}
            />
          ))}
        </Steps>
      </div>
    );
  }
}

export default RStep;
