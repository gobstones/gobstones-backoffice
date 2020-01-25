import React from "react";
import Classroom from "./Classroom";
import styles from "./ClassroomList.module.css";

export default class ClassroomList extends React.Component {
  render() {
    const { classrooms } = this.props;

    return (
      <div className={styles.container}>
        {classrooms.map((it, i) => (
          <Classroom classroom={it} key={i} />
        ))}
      </div>
    );
  }
}
