import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as actions from "./redux/actions.js";
import './name.css';

class NameComponent extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    const { name, updateName } = this.props;

    return (
      <div className='name-component'>
        <h1>What's your name?</h1>
        <input type="text" onChange={updateName} />
        {name && <h2>{`Hello ${name}! 👋🏻`}</h2>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { nameState: {name} } = state;

  return { name };
};

const mapDispatchToProps = { ...actions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameComponent);