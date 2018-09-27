import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const LinkButton = ({ className, theme, onClick, style, children, ...otherProps }) => {
  const baseClass = 'sv-button link';
  const buttonTheme = `link-${theme}`;
  const rootClass = cx(baseClass, buttonTheme, className);

  return (
    <button className={rootClass} style={style} onClick={onClick} {...otherProps}>
      {children}
    </button>
  );
};

LinkButton.defaultProps = {
  theme: 'default',
};

LinkButton.propTypes = {
  theme: PropTypes.oneOf(['default', 'primary', 'info', 'danger', 'warning']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default LinkButton;
