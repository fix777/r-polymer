import React from "react";
import classNames from "classnames";
import { Row, Col, Select, Transfer } from "antd";
import * as AntdRowProps from "antd/lib/grid/row";
import * as AntdColProps from "antd/lib/grid/col";
import * as AntdSelectProps from "antd/lib/select";
import * as AntdTransferProps from "antd/lib/transfer";

const { Option } = Select;

export type CascadeTransferType = "default";
export type CascadeTransferDirection = "default" | "hoz" | "ver";

export interface CascadeTransferSelect {
  key: number;
  selectColProps?: AntdColProps.ColProps;
  selectProps: AntdSelectProps.SelectProps;
  optionProps: Array<AntdSelectProps.OptionProps & { title: string; }>;
}

export interface CascadeTransferProps {
  type?: CascadeTransferType;
  direction?: CascadeTransferDirection;
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  selectsRowProps?: AntdRowProps.RowProps;
  selectsColProps?: AntdColProps.ColProps;
  selects: CascadeTransferSelect[];
  showTransfer?: boolean;
  transferProps: AntdTransferProps.TransferProps;
}

class CascadeTransfer extends React.Component<CascadeTransferProps> {
  public static defaultProps: Partial<CascadeTransferProps> = {
    prefixCls: "r-polymer-cascade-transfer",
    selectsRowProps: {
      gutter: 4,
    },
    selectsColProps: {
      // span: 6,
      xs: 12,
      sm: 8,
      md: 6,
      lg: 6,
      xl: 4,
    },
    showTransfer: true,
  };

  public render() {
    const {
      type,
      // direction,
      style,
      className,
      prefixCls,
      selectsRowProps,
      selectsColProps,
      selects,
      showTransfer,
      transferProps,
      // ...others,
    } = this.props;

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
    });
    return (
      <div
        style={style}
        className={classes}
      >
        <Row {...selectsRowProps}>
          {
            selects.map((select, sIndex: number) => (
              <Col
                key={`${select.key}$-array#map-$${sIndex}`}
                className="ant-col"
                {...selectsColProps}
                {...select.selectColProps}
              >
                <Select {...select.selectProps}>
                  {
                    select.optionProps.map((option, oIndex: number) => (
                      <Option
                        key={`${select.key}$-array#map-$${oIndex}`}
                        value={option.value}
                      >
                        { option.title }
                      </Option>
                    ))
                  }
                </Select>
              </Col>
            ))
          }
        </Row>
        {
          showTransfer && (
            <Row>
              <Col span={24}>
                <Transfer {...transferProps} />
              </Col>
            </Row>
          )
        }
      </div>
    );
  }
}

export default CascadeTransfer;
