import React from "react";
import ReactDiffViewer from "react-diff-viewer";
import { withRouter } from "react-router";
import { CollapsableBox } from "src/components/widgets";
import { gobstonesApi } from "src/api";
import { withLoading } from "src/utils";
import strings from "src/locales";
import styles from "./SubmissionList.module.css";
import _ from "lodash";

class SubmissionList extends React.Component {
  state = { submissions: [], selected: 0, isLoading: false };

  render() {
    const { submissions, selected, isLoading } = this.state;

    const submissionsByExercise = _.groupBy(submissions, "exercise_slug");
    // <ReactDiffViewer oldValue="old" newValue="new" splitView />

    return (
      <div className={styles.container}>
        <h1>
          {strings.submissionsOf} #{this.classroomId}
        </h1>

        <div className={styles.content}>
          {isLoading
            ? strings.loading
            : _.keys(submissionsByExercise).map((slug, i) => (
                <CollapsableBox
                  title={slug}
                  isOpen={selected === i}
                  onToggle={() => this.setState({ selected: i })}
                  key={i}
                >
                  <div>test</div>
                </CollapsableBox>
              ))}
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
