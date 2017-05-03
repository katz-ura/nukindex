import React from "react";
import styles from "./style";

export default class Component extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          動画検索
        </h2>

        <p className={styles.row}>
          <input className={styles.field} onInput={this.props.inputSearchField}
              placeholder="動画を検索" />
        </p>
      </div>
    );
  }
}
