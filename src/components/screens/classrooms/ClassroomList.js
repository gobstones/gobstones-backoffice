import React from "react";
import { Table } from "react-bootstrap";
import Classroom from "./Classroom";
import strings from "src/locales";
import styles from "./ClassroomList.module.css";

export default class ClassroomList extends React.Component {
  render() {
    const { classrooms } = this.props;

    return (
      <div className={styles.container}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{strings.id}</th>
              <th>{strings.name}</th>
              <th>{strings.course}</th>
              <th>{strings.studentsTitle}</th>
            </tr>
          </thead>
          <tbody>
            {classrooms.map((it, i) => (
              <Classroom classroom={it} key={i} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
