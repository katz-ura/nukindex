import React from "react";
import styles from "./style";

export default class Component extends React.Component {
  render() {
    return (
      <footer className={styles.container}>
        <p className={styles.row}>
          Copyright © 2017 Nukindex. All rights reserved.
        </p>

        <p className={styles.row}>
          Contact:
          <a href="mailto:ura.katz.1988@gmail.com">ura.katz.1988@gmail.com</a>
        </p>
      </footer>
    );
  }
}
