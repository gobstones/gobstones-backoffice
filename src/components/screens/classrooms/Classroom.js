import React from "react";
import strings from "src/locales";
import env from "src/config/env";
import styles from "./Classroom.module.css";

export default class Classroom extends React.Component {
  render() {
    const { classroom } = this.props;

    return (
      <tr className={styles.container}>
        <td>{classroom.id}</td>
        <td>{classroom.name}</td>
        <td>
          <a
            href={`${env.GOBSTONES_URL}?classroom=${classroom.classroom_slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {classroom.classroom_slug}
          </a>
        </td>
        <td>
          <a href={`#/classrooms/${classroom.id}`}>
            {classroom.students_count.length} {strings.students}
          </a>
        </td>
      </tr>
    );
  }
}
