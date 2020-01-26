import React from "react";
import strings from "src/locales";
import env from "src/config/env";
import styles from "./Classroom.module.css";

export default class Classroom extends React.Component {
  render() {
    const { classroom } = this.props;

    return (
      <tr className={styles.container} onClick={() => this.goTo(classroom)}>
        <td>{classroom.id}</td>
        <td>{classroom.name}</td>
        <td>
          <a
            href={`${env.GOBSTONES_URL}?classroom=${classroom.course_slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {classroom.course_slug}
          </a>
        </td>
        <td>
          {classroom.students_count} {strings.students}
        </td>
      </tr>
    );
  }

  goTo = (classroom) => {
    window.location.href = `#/classrooms/${classroom.id}`;
  };
}
