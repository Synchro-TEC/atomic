import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return <button className="sv-button primary" onClick={() => this.props.onClick()}>{this.props.children}</button>;
  }
}

Button.propTypes = {
  theme: PropTypes.string,
}

export default Button;
