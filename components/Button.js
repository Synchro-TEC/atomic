import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = ({ outline, className, theme, onClick, style, children, full, small, ...otherProps }) => {
  const baseClass = 'sv-button';
  const buttonTheme = outline ? `out-${theme}` : theme;
  const rootClass = cx(baseClass, buttonTheme, { full, small }, className);

  return (
    <button className={rootClass} style={style} onClick={onClick} {...otherProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'default',
};

Button.propTypes = {
  className: PropTypes.string,
  full: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  style: PropTypes.object,
  theme: PropTypes.oneOf(['default', 'primary', 'info', 'danger', 'warning']),
};

export default Button;
