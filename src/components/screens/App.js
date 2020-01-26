import React from "react";
import NavBar from "src/components/NavBar";
import styles from "./App.module.css";

export default class App extends React.Component {
  render() {
    const { screen: Screen } = this.props;

    return (
      <div className={styles.container}>
        <NavBar />

        <div className={styles.content}>
          <Screen />
        </div>
      </div>
    );
  }
}
