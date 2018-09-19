import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Tag = ({ theme, className, onClose, children, ...otherProps }) => {
  const baseClass = `sv-tag ${theme}`;
  const rootClass = cx(baseClass, className);

  return (
    <div className={rootClass} {...otherProps}>
      <span className="sv-tag__close" onClick={onClose}>
        ×
      </span>
      <span className="sv-tag__content">{children}</span>
    </div>
  );
};

Tag.defaultProps = {
  theme: 'default',
};

Tag.propTypes = {
  onClose: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'primary', 'danger', 'info', 'warning']),
};

export default Tag;
