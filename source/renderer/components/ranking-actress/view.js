import React from "react";
import styles from "./style";

export default class Component extends React.Component {
  render() {
    const actressRankingItems = this.props.actresses.map(actress => {
      return (
        <li className={styles.item}>
          <a href="#">{actress}</a>
        </li>
      );
    });

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          私的女優ランキング
        </h2>

        <p className={styles.description}>
          個人的な女優ランキングです。
        </p>

        <ol className={styles.list}>
          {actressRankingItems}
        </ol>
      </div>
    );
  }
}
