import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import nanoid from 'nanoid';

const SelectField = ({
  label,
  disabled,
  options,
  valueKey,
  labelKey,
  onChange,
  hintInfo,
  errorMessage,
  ...otherProps
}) => {
  let labelOpts = {};

  if (hintInfo) {
    labelOpts['data-info'] = hintInfo;
  }

  if (errorMessage) {
    labelOpts['data-error'] = errorMessage;
  }

  const rootClass = cx({ 'is--invalid': errorMessage });

  let selectOptions = {
    onChange: onChange,
    className: rootClass,
  };

  if (disabled) {
    selectOptions.disabled = disabled;
  }

  const selectProps = Object.assign(selectOptions, otherProps);

  const optionsForSelect = options.map(opt => (
    <option key={nanoid()} value={opt[valueKey]}>
      {opt[labelKey]}
    </option>
  ));

  return (
    <label>
      <span {...labelOpts}>{label}</span>
      <div className="sv-select">
        <select {...selectProps}>{optionsForSelect}</select>
        <label>
          <i className="fa fa-angle-down fa-fw" />
        </label>
      </div>
    </label>
  );
};

SelectField.defaultProps = {
  disabled: false,
};

SelectField.propTypes = {
  options: PropTypes.array,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  hintInfo: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'email', 'password']),
};

export default SelectField;
