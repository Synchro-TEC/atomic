import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../../atoms/TextField/TextField';

const SimpleSearch = ({ query, placeholder, onType, onSubmit }) => {
  const search = e => {
    e.preventDefault();
    onSubmit(e, query);
  };

  const changeValue = e => {
    onType(e.target.value);
  };

  return (
    <form className="sv-form sv-text-right" onSubmit={search}>
      <TextField onChange={changeValue} value={query} placeholder={placeholder} inLine={true} />
      <button className="sv-button info at-last">Pesquisar</button>
    </form>
  );
};

SimpleSearch.defaultProps = {
  placeholder: 'Pesquisar',
};

SimpleSearch.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.string,
  onType: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SimpleSearch;
