import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Classroom from "./Classroom";
import strings from "src/locales";
import styles from "./ClassroomList.module.css";

class ClassroomList extends React.Component {
  render() {
    const { classrooms, isLoading } = this.props;

    return (
      <div className={styles.container}>
        <h1>{strings.classrooms}</h1>

        <div className={styles.content}>
          {isLoading ? (
            strings.loading
          ) : (
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
          )}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getClassrooms();
  }
}

const mapStateToProps = ({ classrooms, loading }) => ({
  classrooms,
  isLoading: loading.effects.classrooms.getClassrooms
});
const mapDispatchToProps = ({ classrooms }) => classrooms;

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomList);
