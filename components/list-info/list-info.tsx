import React from "react";
import classNames from "classnames";
import { Icon, Tooltip } from "antd";

import isEllipsisActive from "./../_util/isEllipsisActive";

// import MultiLineEllipsis from "./../multi-line-ellipsis";
import "./../multi-line-ellipsis/style";

export interface ListInfoProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
}

export interface ListInfoState {
  moreButton: React.ReactNode[];
  expandedTextIndex: number;
}

export class ListInfo extends React.Component<ListInfoProps, ListInfoState> {
  public static defaultProps: Partial<ListInfoProps> = {
    prefixCls: "r-polymer-list-info",
  };

  public state: ListInfoState = {
    moreButton: [],
    expandedTextIndex: -1,
  };

  private textRefs: Array<HTMLElement | null> = [];

  public componentDidMount() {
    const { state, textRefs } = this;
    const { moreButton } = state;
    textRefs.forEach((textRef, index: number) => {
      const showMoreBtn = isEllipsisActive(textRef);
      moreButton[index] =
        showMoreBtn
          ? <a onClick={this.onTextExpand(index)}><Icon type="down-circle" /></a>
          : null;
    });
    this.setState({ moreButton });
  }

  public onTextExpand = (expandedTextIndex: number) => () => {
    this.setState({ expandedTextIndex });
  }

  public render() {
    const {
      // moreButton,
      expandedTextIndex,
    } = this.state;

    const {
      style,
      className,
      prefixCls,
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
          [1, 2, 3, 4, 5].map((item, index: number) => {
            const itemClasses = classNames(prefixCls, { [`${prefixCls}-item`]: "item" });
            const titleClasses = classNames(prefixCls, { [`${prefixCls}-title`]: "title" });
            let textClasses = classNames(prefixCls, { [`${prefixCls}-text`]: "text" });
            if (Number(expandedTextIndex) === index) {
              textClasses = classNames(textClasses, {
                [`${prefixCls}-expanded`]: "expanded"
              });
            }

            return (
              <div
                key={index}
                className={itemClasses}
              >
                <div className={titleClasses}>六6个字标题:</div>
                <div
                  className={textClasses}
                  ref={textRef => this.textRefs[index] = textRef}
                >
                  <Tooltip
                    title={<div style={{ maxWidth: 100, wordBreak: "break-word" }}> {(item).toString().repeat(50)}</div>}
                  >
                    { (item).toString().repeat(5) }
                  </Tooltip>
                </div>
                {/* { moreButton.length > index && moreButton[index] } */}
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default ListInfo;
