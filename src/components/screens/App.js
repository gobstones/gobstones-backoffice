import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import NavBar from "src/components/NavBar";
import ClassroomList from "./classrooms/ClassroomList";
import strings from "src/locales";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    const { classrooms, isLoading } = this.props;

    return (
      <div className={styles.container}>
        <NavBar />

        <div className={styles.content}>
          <h1>{strings.classrooms}</h1>

          {isLoading ? (
            strings.loading
          ) : (
            <ClassroomList classrooms={classrooms} />
          )}

          <Button className={styles.logout} onClick={this.logout}>
            {strings.logout}
          </Button>
        </div>
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
const mapDispatchToProps = ({ classrooms, auth }) => ({
  ...classrooms,
  ...auth
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
