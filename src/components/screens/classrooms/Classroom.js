import React from "react";
import strings from "src/locales";
import styles from "./Classroom.module.css";

export default class Classroom extends React.Component {
  render() {
    const { classroom } = this.props;

    return (
      <div className={styles.container}>
        {classroom.id} - {classroom.name} - {classroom.slug} -{" "}
        {classroom.students.length} {strings.students}
      </div>
    );
  }
}
