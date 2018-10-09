import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import _isFunction from 'lodash/isFunction';

const DataTable = ({ cols, data }) => {
  return (
    <table className="sv-table with--borders with--hover">
      <thead>
        <tr>
          {cols.map(col => (
            <th key={nanoid()}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(d => (
          <tr key={nanoid()}>
            {cols.map(col => (
              <td key={nanoid()}>{_isFunction(col.accessor) ? col.accessor(d) : d[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  cols: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default DataTable;
