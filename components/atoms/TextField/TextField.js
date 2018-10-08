import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TextField = ({ label, value, disabled, type, onChange, hintInfo, errorMessage, inLine, ...otherProps }) => {
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

  let labelProps = {};

  if (inLine) {
    labelProps.style = { display: 'inline-block' };
  }

  return (
    <label {...labelProps}>
      <span {...labelOpts}>{label}</span>
      <input value={value} {...inputProps} />
    </label>
  );
};

TextField.defaultProps = {
  type: 'text',
  disabled: false,
  inLine: false,
};

TextField.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  inLine: PropTypes.bool,
  hintInfo: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'email', 'password']),
};

export default TextField;
