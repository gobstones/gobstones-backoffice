import React from "react";
import { withRouter } from "react-router";
import { gobstonesApi } from "src/api";
import { withLoading } from "src/utils";
import strings from "src/locales";
import styles from "./SubmissionList.module.css";

class SubmissionList extends React.Component {
  state = { submissions: [], isLoading: false };

  render() {
    const { submissions, isLoading } = this.state;

    return (
      <div className={styles.container}>
        <h1>
          {strings.submissionsOf} #{this.classroomId}
        </h1>

        <div className={styles.content}>
          {isLoading ? (
            strings.loading
          ) : (
            <code>{JSON.stringify(submissions, null, 2)}</code>
          )}
        </div>
      </div>
    );
  }

  componentDidMount() {
    withLoading(
      gobstonesApi.getSubmissionsOf(this.classroomId, this.studentId),
      this
    ).then((submissions) => {
      this.setState({ submissions });
    });
  }

  get classroomId() {
    return this.props.match.params.classroomId;
  }

  get studentId() {
    return this.props.match.params.studentId;
  }
}

export default withRouter(SubmissionList);
