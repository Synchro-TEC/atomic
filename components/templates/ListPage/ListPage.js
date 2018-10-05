import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import update from 'react-addons-update';
import Paginator from '../../molecules/Paginator/Paginator';
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
    };

    this._fetch = this._fetch.bind(this);
  }

  componentDidMount() {
    this._fetch();
  }

  _fetch(page = this.state.page) {
    this.setState(update(this.state, { loading: { $set: true } }));

    axios.get(`${this.props.resourceUrl}?page=${page}`).then(response => {
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
    // const newState = update(this.state, {
    //   page: { $set: pager.currentPage },
    // });

    // this.setState(newState, () => {
    this.setState(update(this.state, { loading: { $set: true } }));
    this._fetch(pager.currentPage);
    // });
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
                <form className="sv-form">
                  <div className="sv-input-group">
                    <input type="search" className="on-first" placeholder={this.props.searchPlaceHolder} />
                    <button className="sv-button info at-last">Pesquisar</button>
                  </div>
                </form>
              </div>
            </div>
          </caption>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(d => (
              <tr key={d.url}>
                <td>{d.name}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="1" className="sv-text-center">
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
