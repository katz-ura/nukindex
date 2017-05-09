import React from "react";
import { connect } from "react-redux";
import Component from "./view";
import Actions from "./actions";

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    "loadData": () => {
      dispatch(Actions.loadVideosData());

      dispatch(Actions.loadActressesData());
    }
  };
}
