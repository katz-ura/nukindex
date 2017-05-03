import React from "react";
import styles from "./style";

import HeaderComponent from "../header/view";
import MainComponent from "../main/view";
import FooterComponent from "../footer/view";

export default class Component extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <HeaderComponent />

        <MainComponent />

        <FooterComponent />
      </div>
    );
  }
}
