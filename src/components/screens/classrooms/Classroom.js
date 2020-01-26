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
            href={`${env.GOBSTONES_URL}?course=${classroom.course_slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {classroom.course_slug}
          </a>
        </td>
        <td>
          <a href={`#/courses/${classroom.id}`}>
            {classroom.students.length} {strings.students}
          </a>
        </td>
      </tr>
    );
  }
}
