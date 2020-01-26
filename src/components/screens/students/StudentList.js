import React from "react";
import { withRouter } from "react-router";
import { gobstonesApi } from "src/api";
import { withLoading } from "src/utils";
import { Table } from "react-bootstrap";
import Student from "./Student";
import strings from "src/locales";
import styles from "./StudentList.module.css";

class StudentList extends React.Component {
  state = { students: [], isLoading: false };

  render() {
    const { students, isLoading } = this.state;

    return (
      <div className={styles.container}>
        <h1>
          {strings.studentsOf} #{this.courseId}
        </h1>

        <div className={styles.content}>
          {isLoading ? (
            strings.loading
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>{strings.id}</th>
                  <th>{strings.firstName}</th>
                  <th>{strings.lastName}</th>
                </tr>
              </thead>
              <tbody>
                {students.map((it, i) => (
                  <Student student={it} key={i} />
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    );
  }

  componentDidMount() {
    withLoading(gobstonesApi.getStudentsOf(this.courseId), this).then(
      (students) => {
        this.setState({ students });
      }
    );
  }

  get courseId() {
    return this.props.match.params.id;
  }
}

export default withRouter(StudentList);
