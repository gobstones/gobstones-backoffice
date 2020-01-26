import React from "react";
import styles from "./Student.module.css";

export default class Student extends React.Component {
  render() {
    const { student, onClick } = this.props;

    return (
      <tr className={styles.container} onClick={onClick}>
        <td>{student.id}</td>
        <td>{student.first_name}</td>
        <td>{student.last_name}</td>
      </tr>
    );
  }
}
