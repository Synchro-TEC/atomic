import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import nanoid from 'nanoid';

const SelectField = ({
  label,
  disabled,
  options,
  optionValue,
  optionText,
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
    <option key={nanoid()} value={typeof optionValue === 'function' ? optionValue(opt) : opt[optionValue]}>
      {typeof optionText === 'function' ? optionText(opt) : opt[optionText]}
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
  options: PropTypes.array.isRequired,
  /** Pode ser a key do objeto ou uma function que recebe o obejeto corrente como parâmetro e deve retorna um valor */
  optionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Pode ser a key do objeto ou uma function que recebe o obejeto corrente como parâmetro e deve retorna um valor */
  optionText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  hintInfo: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'email', 'password']),
};

export default SelectField;
