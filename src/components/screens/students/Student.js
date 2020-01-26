import React from "react";
import styles from "./Student.module.css";

export default class Student extends React.Component {
  render() {
    const { student } = this.props;

    return (
      <tr className={styles.container}>
        <td>{student.id}</td>
        <td>{student.first_name}</td>
        <td>{student.last_name}</td>
      </tr>
    );
  }
}
