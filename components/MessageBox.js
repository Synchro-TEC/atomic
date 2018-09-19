import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const MessageBox = ({ theme, className, title, onClose, children, ...otherProps }) => {
  const baseClass = `sv-messagebox ${theme}`;
  const rootClass = cx(baseClass, className);

  return (
    <div className={rootClass} {...otherProps}>
      <button className="sv-messagebox__close" onClick={onClose}>
        &times;
      </button>
      <header>
        <h6>{title}</h6>
      </header>
      <main>{children}</main>
    </div>
  );
};

MessageBox.defaultProps = {
  theme: 'info',
};

MessageBox.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  theme: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
};

export default MessageBox;
