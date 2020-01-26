import React from "react";
import { connect } from "react-redux";
import NavBar from "src/components/NavBar";
import ClassroomList from "./classrooms/ClassroomList";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <NavBar />

        <div className={styles.content}>
          <ClassroomList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ classrooms, loading }) => ({
  classrooms,
  isLoading: loading.effects.classrooms.getClassrooms
});
const mapDispatchToProps = ({ classrooms }) => classrooms;

export default connect(mapStateToProps, mapDispatchToProps)(App);
