import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import update from 'react-addons-update';
import DataTable from '../../molecules/DataTable/index';
import Paginator from '../../molecules/Paginator/Paginator';
import SimpleSearch from '../../molecules/SimpleSearch/SimpleSearch';
import Loader from '../../atoms/Loader/Loader';
import Row from '../../atoms/Row/Row';
import Col from '../../atoms/Col/Col';

class ListPage extends Component {
  constructor(props) {
    super(props);

    this.resultKey = 'results';
    this.countKey = 'count';

    this.state = {
      loaded: false,
      loading: true,
      page: 1,
      limit: 10,
      count: null,
      data: [],
      query: '',
    };

    this.cols = this._extractCols(props);

    this._fetch = this._fetch.bind(this);
    this._typeSearch = this._typeSearch.bind(this);
    this._searchSubmit = this._searchSubmit.bind(this);
  }

  componentDidMount() {
    this._fetch();
  }

  _fetch(page = this.state.page) {
    this.setState(update(this.state, { loading: { $set: true } }));

    let url = `${this.props.resourceUrl}?page=${page}`;

    if (this.state.query.trim() !== '') {
      url += `&search=${this.state.query}`;
    }

    axios.get(url).then(response => {
      const data = response.data[this.resultKey];
      const newState = update(this.state, {
        loaded: { $set: true },
        count: { $set: response.data[this.countKey] },
        data: { $set: data },
        page: { $set: page },
        loading: { $set: false },
      });
      this.setState(newState);
    });
  }

  _goTo(pager) {
    this.setState(update(this.state, { loading: { $set: true } }));
    this._fetch(pager.currentPage);
  }

  _typeSearch(query) {
    this.setState(update(this.state, { query: { $set: query } }));
  }

  _searchSubmit(e, query) {
    this.setState(update(this.state, { query: { $set: query } }));
    this._fetch(1);
  }

  _extractCols(props) {
    return React.Children.map(props.children, child => {
      return { label: child.props.label, accessor: child.props.accessor };
    });
  }

  render() {
    return (
      <div className="sv-table-responsive-vertical" style={{ position: 'relative' }}>
        {this.state.loading ? (
          <div
            style={{
              position: 'absolute',
              top: '54px',
              left: '0',
              width: '100%',
              height: 'calc(100% - 44px)',
              zIndex: '10',
              backgroundColor: 'rgba(0,0,0,0.1)',
              padding: '50px',
            }}
            className="sv-text-center"
          >
            <Loader />
          </div>
        ) : (
          ''
        )}
        <Row>
          <Col className="sv-column sv-vertical-marged-10">
            <button className="sv-button info sv-pull-left">
              <i className="fa fa-plus fa-fw" />
              Add
            </button>
          </Col>
          <Col className="sv-vertical-marged-10">
            <SimpleSearch
              query={this.state.query}
              placeholder={this.props.searchPlaceHolder}
              onType={this._typeSearch}
              onSubmit={this._searchSubmit}
            />
          </Col>
        </Row>
        <DataTable cols={this.cols} data={this.state.data} />
        <Row>
          <Col>
            {this.state.loaded && (
              <Paginator
                page={this.state.page}
                limit={this.state.limit}
                total={this.state.count}
                onGoToNext={pager => this._goTo(pager)}
                onGoToPage={pager => this._goTo(pager)}
                onGoToPrevious={pager => this._goTo(pager)}
              />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

ListPage.defaultProps = {
  searchPlaceHolder: 'Pesquisar',
};

ListPage.propTypes = {
  resourceUrl: PropTypes.string.isRequired,
  searchPlaceHolder: PropTypes.string,
  newButtom: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
};

export default ListPage;
