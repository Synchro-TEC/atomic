import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import LinkButton from '../../atoms/LinkButton/LinkButton';

const Paginator = ({ page, limit, total, onGoToNext, onGoToPrevious, onGoToPage }) => {
  let currentPage = page;
  let totalOfPieces = Math.ceil(total / limit);

  const mountPaginateInfo = () => {
    return {
      limit: limit,
      offset: limit * currentPage - limit,
      currentPage: currentPage,
    };
  };

  const goToNext = () => {
    if (onGoToNext && currentPage < totalOfPieces) {
      currentPage += 1;
      onGoToNext(mountPaginateInfo());
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      currentPage -= 1;
    }
    onGoToPrevious(mountPaginateInfo());
  };

  const goToPage = e => {
    currentPage = parseInt(e.target.textContent);
    onGoToPage(mountPaginateInfo());
  };

  const colorPaginationOptionAndPutGapIfNeeded = i => {
    let option = {};

    if (i === '...') {
      option = <span key={nanoid()}>{i}</span>;
    } else {
      if (currentPage === i) {
        option = <em key={nanoid()}> {i} </em>;
      } else {
        option = (
          <a key={nanoid()} onClick={e => goToPage(e)}>
            {' '}
            {i}{' '}
          </a>
        );
      }
    }

    return option;
  };

  const getGap = () => {
    return colorPaginationOptionAndPutGapIfNeeded('...');
  };

  const createInitialOptionPages = () => {
    let initialPages = [];
    if (totalOfPieces >= 2) {
      for (let i = 1; i <= 2; i++) {
        initialPages.push(colorPaginationOptionAndPutGapIfNeeded(i));
      }
    } else if (totalOfPieces > 0) {
      initialPages.push(colorPaginationOptionAndPutGapIfNeeded(totalOfPieces));
    }

    return initialPages;
  };

  const createMiddleOptionPages = () => {
    let middlePages = [];

    if (totalOfPieces <= 10) {
      for (let i = totalOfPieces - 2; i >= 3; i--) {
        middlePages.unshift(colorPaginationOptionAndPutGapIfNeeded(i));
      }
    } else if (totalOfPieces - currentPage <= 2) {
      // Se faltam apenas 2 a frente, é preciso manter o terceiro numero atrás
      // (let i = totalOfPieces - 4)
      middlePages.push(getGap());
      for (let i = totalOfPieces - 4; i <= totalOfPieces - 2; i++) {
        middlePages.push(colorPaginationOptionAndPutGapIfNeeded(i));
      }
    } else if (totalOfPieces - currentPage <= 5) {
      // Se ainda faltam mais de dois numeros a frente nao e
      // preciso manter 3 numeros atras (let i = currentPage - 2)
      for (let i = currentPage - 2; i <= totalOfPieces - 2; i++) {
        middlePages.push(colorPaginationOptionAndPutGapIfNeeded(i));
      }
      middlePages.unshift(getGap());
    } else if (currentPage <= 2) {
      // Sempre entra aqui ao carregar a pagina, ou quando o usuario volta
      // para a primeira pagina, gera as 4 opcoes a frente
      for (let i = 3; i <= 5; i++) {
        middlePages.push(colorPaginationOptionAndPutGapIfNeeded(i));
      }
      middlePages.push(getGap());
    } else if (currentPage <= 6 && currentPage >= 3) {
      //Mantem as opcoes de paginacao, sempre duas a frente da selecionada
      for (let i = currentPage + 2; i >= 3; i--) {
        middlePages.unshift(colorPaginationOptionAndPutGapIfNeeded(i));
      }
      middlePages.push(colorPaginationOptionAndPutGapIfNeeded('...'));
    } else if (currentPage - 1 >= 6) {
      // Parte do meio, que mantem as retissencias dos dois lados
      middlePages.push(getGap());
      for (let i = 2; i >= -2; i--) {
        middlePages.push(colorPaginationOptionAndPutGapIfNeeded(currentPage - i));
      }
      middlePages.push(getGap());
    }
    return middlePages;
  };

  const createLastOptionPages = () => {
    let lastPages = [];

    if (totalOfPieces >= 4) {
      for (let i = totalOfPieces; i > totalOfPieces - 2; i--) {
        lastPages.unshift(colorPaginationOptionAndPutGapIfNeeded(i));
      }
    } else if (totalOfPieces === 3) {
      lastPages.push(colorPaginationOptionAndPutGapIfNeeded(totalOfPieces));
    }

    return lastPages;
  };

  let paginateOptions = [];
  paginateOptions.push(createInitialOptionPages());
  paginateOptions.push(createMiddleOptionPages());
  paginateOptions.push(createLastOptionPages());

  return (
    <div className="sv-paginate">
      <LinkButton theme="info" disabled={currentPage === 1 || totalOfPieces === 0} onClick={goToPrevious}>
        <i className="fa fa-chevron-left" />
        Anterior
      </LinkButton>
      {paginateOptions}
      <LinkButton theme="info" disabled={totalOfPieces <= currentPage} onClick={goToNext}>
        Próximo
        <i className="fa fa-chevron-right" />
      </LinkButton>
    </div>
  );
};

Paginator.defaultProps = {
  page: 1,
};

Paginator.propTypes = {
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onGoToNext: PropTypes.func.isRequired,
  onGoToPrevious: PropTypes.func.isRequired,
  onGoToPage: PropTypes.func.isRequired,
};

export default Paginator;
