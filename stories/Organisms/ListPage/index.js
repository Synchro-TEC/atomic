import React from 'react';
import readme from './README.md';
import { ListPage, ListCol } from '../../../components/Organisms/ListPage/index';

const component = () => {
  return (
    <React.Fragment>
      <ListPage resourceUrl="https://swapi.co/api/people/">
        <ListCol label="Nome" accessor="name" />
        <ListCol label="Genero" accessor="gender" type="string" filterable />
        <ListCol
          accessor={rowData => (
            <a
              href={`https://www.google.com.br/search?tbm=isch&q=${encodeURI(rowData.name)}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {rowData.name}
            </a>
          )}
          label="Imagens"
        />
      </ListPage>
    </React.Fragment>
  );
};

export default [readme, component];
