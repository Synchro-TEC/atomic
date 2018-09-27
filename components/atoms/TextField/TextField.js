import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TextField = ({ label, disabled, type, onChange, hintInfo, errorMessage, ...otherProps }) => {
  let labelOpts = {};

  if (hintInfo) {
    labelOpts['data-info'] = hintInfo;
  }

  if (errorMessage) {
    labelOpts['data-error'] = errorMessage;
  }

  const rootClass = cx({ 'is--invalid': errorMessage });

  let inputOptions = {
    type: type,
    onChange: onChange,
    className: rootClass,
  };

  if (disabled) {
    inputOptions.disabled = disabled;
  }

  const inputProps = Object.assign(inputOptions, otherProps);

  return (
    <label>
      <span {...labelOpts}>{label}</span>
      <input {...inputProps} />
    </label>
  );
};

TextField.defaultProps = {
  type: 'text',
  disabled: false,
};

TextField.propTypes = {
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  hintInfo: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'email', 'password']),
};

export default TextField;
