import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import classNames from "classnames";
import styles from "./IconButton.module.css";

export default class IconButton extends Component {
  render() {
    const {
      icon,
      size,
      onClick,
      disabled = false,
      className = null,
      ...rest
    } = this.props;

    return (
      <div
        className={classNames(
          styles.container,
          disabled ? styles.disabled : styles.enabled,
          className
        )}
        onClick={disabled ? null : onClick}
        {...rest}
      >
        <FeatherIcon
          icon={icon}
          color={disabled ? "#ffffff" : null}
          size={size}
        />
      </div>
    );
  }
}
