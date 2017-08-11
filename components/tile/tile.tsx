import React, {
  Component,
  CSSProperties,
  ReactNode,
} from "react";
import classNames from "classnames";
import {
  Tooltip,
} from "antd";

export interface TileDetail {
  label: ReactNode;
  description: ReactNode;
}

export interface TileProps {
  style?: CSSProperties;
  className?: string;
  prefixCls?: string;
  title?: string;
  details: TileDetail[];
}

export class Tile extends Component<TileProps> {
  static defaultProps: Partial<TileProps> = {
    prefixCls: "r-polymer-tile",
    details: [],
  };

  private prefix = "r-polymer";

  renderTitle = () => {
    const { title } = this.props;
    if (!title) return null;
    const clazz = classNames("r-polymer-truncate");
    return (
      <h3 className={clazz}>{ title }</h3>
    );
  }

  renderTooltip = (content: any) => {
    const { prefixCls } = this.props;
    const clazz = classNames({
      [`${prefixCls}-popover-wrap`]: true,
    });

    return (
      <div className={clazz}>
        { content }
      </div>
    );
  }

  renderDetails = () => {
    const { details, prefixCls, } = this.props;
    if (!details.length) return null;

    const clazz = classNames({
      [`${prefixCls}-detail`]: true,
    });

    const dtClazz = classNames({
      [`${this.prefix}-text-color_weak`]: true,
      [`${this.prefix}-truncate`]: true,
      [`${this.prefix}-text-align_right`]: true,
    });
    const ddClazz = classNames({
      [`${this.prefix}-truncate`]: true,
      [`${this.prefix}-text-align_left`]: true,
    });

    const renderDetailItem = ({ label, description }: TileDetail, i: number) => (
      <div key={i}>
        <Tooltip title={this.renderTooltip(label)}>
          <dt className={dtClazz}>{ label }</dt>
        </Tooltip>
        <Tooltip title={this.renderTooltip(description)}>
          <dd className={ddClazz}>{ description }</dd>
        </Tooltip>
      </div>
    );

    return (
      <div className={clazz}>
        <dl>
          {
            details.map((item, i: number) => {
              const detailItem = renderDetailItem(item, i);
              return detailItem.props.children;
            })
          }
        </dl>
      </div>
    );
  }

  render() {
    const {
      style,
      className,
      prefixCls,
    } = this.props;

    const clazz = classNames(prefixCls, className, {
      [`${prefixCls}-wrap`]: true,
    });

    return (
      <div
        style={style}
        className={clazz}
      >
        { this.renderTitle() }
        { this.renderDetails() }
      </div>
    );
  }
}

export default Tile;
