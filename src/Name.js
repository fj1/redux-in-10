import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as nameActions from "./redux/nameActions.js";
import "./name.css";

class NameComponent extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    const { name, updateName } = this.props;

    return (
      <div className="name-component">
        <h1>What's your name?</h1>
        <input type="text" onChange={updateName} value={name} />
        {name && <h2>{`Hello ${name}! 👋🏻`}</h2>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    nameState: { name }
  } = state;

  return { name };
};

const mapDispatchToProps = dispatch => {
  return {
    updateName: event => dispatch(nameActions.updateName(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameComponent);
