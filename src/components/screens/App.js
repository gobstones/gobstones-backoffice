import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import ClassroomList from "./classrooms/ClassroomList";
import strings from "src/locales";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    const { classrooms, isLoading } = this.props;

    return (
      <div>
        <p>{strings.classrooms}</p>

        {isLoading ? (
          strings.loading
        ) : (
          <ClassroomList classrooms={classrooms} />
        )}

        <Button className={styles.logout} onClick={this.logout}>
          {strings.logout}
        </Button>
      </div>
    );
  }

  componentDidMount() {
    this.props.getClassrooms();
  }

  logout = () => {
    this.props.logout();
    window.location.reload();
  };
}

const mapStateToProps = ({ classrooms, loading }) => ({
  classrooms,
  isLoading: loading.effects.classrooms.getClassrooms
});
const mapDispatchToProps = ({ classrooms }) => classrooms;

export default connect(mapStateToProps, mapDispatchToProps)(App);
