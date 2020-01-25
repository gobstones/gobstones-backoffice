import React from "react";
import strings from "src/locales";
import styles from "./Classroom.module.css";

export default class Classroom extends React.Component {
  render() {
    const { classroom } = this.props;

    return (
      <tr className={styles.container}>
        <td>{classroom.id}</td>
        <td>{classroom.name}</td>
        <td>{classroom.slug}</td>
        <td>
          <a href="#/courseId">
            {classroom.students.length} {strings.students}
          </a>
        </td>
      </tr>
    );
  }
}
