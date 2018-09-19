import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TextField = ({ label, onChange, children, ...otherProps }) => {
  const baseClass = `sv-tag ${theme}`;
  const rootClass = cx(baseClass, className);

  return (
    <label>
      <span data-info="(8 caracters)" data-error="Cep inválido">
        {label}
      </span>
      <input type="text" className="is--invalid" onChange={onChange} />
    </label>
  );
};

TextField.defaultProps = {
  theme: 'default',
};

TextField.propTypes = {
  label: PropTypes.string,
  onClose: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'primary', 'danger', 'info', 'warning']),
};

export default TextField;
