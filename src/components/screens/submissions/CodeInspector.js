import React from "react";
import ReactDiffViewer from "react-diff-viewer";
import { IconButton } from "src/components/widgets";
import strings from "src/locales";
import styles from "./CodeInspector.module.css";

class CodeInspector extends React.Component {
  state = { selected: 0 };

  componentDidMount() {
    this.setState({ selected: this.props.submissions.length - 1 });
  }

  render() {
    const { submissions } = this.props;
    const { selected } = this.state;

    const previous = submissions[selected - 1];
    const current = submissions[selected];
    const oldCode = previous ? previous.code : "";
    const newCode = current.code;

    return (
      <div className={styles.container}>
        <div className={styles.buttons}>
          <IconButton
            icon="chevron-left"
            disabled={selected === 0}
            onClick={this.back}
          />
          <IconButton
            icon="chevron-right"
            disabled={selected === submissions.length - 1}
            onClick={this.forward}
            style={{ marginLeft: 10 }}
          />
        </div>

        <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView />
      </div>
    );
  }

  forward = () => {
    this.setState({ selected: this.state.selected + 1 });
  };

  back = () => {
    this.setState({ selected: this.state.selected - 1 });
  };
}

export default CodeInspector;
