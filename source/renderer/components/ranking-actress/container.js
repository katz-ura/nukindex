import React from "react";
import { connect } from "react-redux";
import Component from "./view";

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

function mapStateToProps(state) {
  return state.app;
}

function mapDispatchToProps(dispatch) {
  return {};
}
