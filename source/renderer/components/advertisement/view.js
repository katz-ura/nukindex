import React from "react";
import styles from "./style";

export default class Component extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          広告
        </h2>

        <div className={styles.ads}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
