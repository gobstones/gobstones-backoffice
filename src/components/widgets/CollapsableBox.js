import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import classNames from "classnames";
import styles from "./CollapsableBox.module.css";

export default class CollapsableBox extends Component {
  render() {
    const {
      title,
      isOpen,
      onToggle,
      className = null,
      children,
      ...rest
    } = this.props;

    return (
      <div
        className={classNames(
          styles.container,
          !isOpen ? styles.selectable : null,
          className
        )}
        onClick={onToggle}
        {...rest}
      >
        <div className={styles.title}>
          <FeatherIcon icon={isOpen ? "chevron-down" : "chevron-right"} />
          <span className={styles.titleText}>{title}</span>
        </div>

        {isOpen && (
          <div className={styles.detail}>
            <hr />
            {children}
          </div>
        )}
      </div>
    );
  }
}
