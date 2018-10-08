import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import nanoid from 'nanoid';
import update from 'react-addons-update';
import Paginator from '../../molecules/Paginator/Paginator';
import SimpleSearch from '../../molecules/SimpleSearch/SimpleSearch';
import Loader from '../../atoms/Loader/Loader';

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
              top: '43px',
              left: '0',
              width: '100%',
              height: 'calc(100% - 43px)',
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
        <table className="sv-table with--borders with--hover">
          <caption>
            <div className="sv-row">
              <div className="sv-column sv-vertical-marged-10">
                <button className="sv-button info sv-pull-left">
                  <i className="fa fa-plus fa-fw" />
                  Add
                </button>
              </div>
              <div className="sv-column sv-vertical-marged-10">
                <SimpleSearch
                  query={this.state.query}
                  placeholder={this.props.searchPlaceHolder}
                  onType={this._typeSearch}
                  onSubmit={this._searchSubmit}
                />
              </div>
            </div>
          </caption>
          <thead>
            <tr>
              {this.cols.map(col => (
                <th key={nanoid()}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(d => (
              <tr key={nanoid()}>
                {this.cols.map(col => (
                  <td key={nanoid()}>{d[col.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={this.cols.length} className="sv-text-center">
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
              </td>
            </tr>
          </tfoot>
        </table>
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
