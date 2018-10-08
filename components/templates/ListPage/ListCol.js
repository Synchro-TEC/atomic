import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCol extends Component {
  render() {
    return <div>Col</div>;
  }
}

ListCol.propTypes = {
  accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default ListCol;
