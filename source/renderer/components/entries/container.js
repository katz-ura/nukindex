import React from "react";
import { connect } from "react-redux";
import Component from "./view";
import Actions from "./actions";

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

function mapStateToProps(state) {
  return state.app;
}

function mapDispatchToProps(dispatch) {
  return {
    "clickEntryItem": selectedId => {
      return ev => {
        window.scroll(0, ev.currentTarget.offsetTop);

        dispatch(Actions.changeSelectedId(selectedId));
      };
    },
    "setVideoFrameToFirstEntry": videoId => {
      dispatch(Actions.changeSelectedId(videoId));
    }
  };
}
