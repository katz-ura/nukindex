import React from "react";
import styles from "./style";

export default class Component extends React.Component {
  render() {
    return (
      <header className={styles.container}>
        <h1 className={styles.title}>
          <a href="/">Nukindex</a>
        </h1>

        <p className={styles.description}>
          毎日のおかずを提供するサイトです
        </p>
      </header>
    );
  }
}
