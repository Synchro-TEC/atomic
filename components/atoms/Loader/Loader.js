import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Loader = ({ type, large, ...otherProps }) => {
  const baseClass = `sv-${type}-loader`;
  const rootClass = cx(baseClass, { large });

  return <span className={rootClass} {...otherProps} />;
};

Loader.defaultProps = {
  type: 'spin',
};

Loader.propTypes = {
  large: PropTypes.bool,
  type: PropTypes.oneOf(['bar', 'spin']),
};

export default Loader;
