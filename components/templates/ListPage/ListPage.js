import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(this.props.resourceUrl).then(response => {
      console.table(response.data);
    });
  }

  render() {
    return (
      <div className="sv-table-responsive-vertical">
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
                    <input type="search" className="on-first" placeholder="Type to search!" />
                    <button className="sv-button info at-last">Pesquisar</button>
                  </div>
                </form>
              </div>
            </div>
          </caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Age</th>
              <th className="sv-text-center">Gender</th>
              <th>Type</th>
              <th>City</th>
              <th>Language</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@doe.com</td>
              <td>39</td>
              <td className="sv-text-center">
                <i className="fa fa-male fa-fw" title="Male" />
              </td>
              <td>Master</td>
              <td>Campinas</td>
              <td>Portuguese</td>
              <td>
                <a href="">Show</a>
              </td>
            </tr>
            <tr>
              <td>Minnie Murray</td>
              <td>minnie.murray31@example.com</td>
              <td>29</td>
              <td className="sv-text-center">
                <i className="fa fa-female fa-fw" title="Female" />
              </td>
              <td>Master</td>
              <td>São Paulo</td>
              <td>Portuguese</td>
              <td>
                <a href="">Show</a>
              </td>
            </tr>
            <tr>
              <td>Diane Ruiz</td>
              <td>diane.ruiz91@example.com</td>
              <td>27</td>
              <td className="sv-text-center">
                <i className="fa fa-female fa-fw" title="Female" />
              </td>
              <td>Senior</td>
              <td>San Francisco</td>
              <td>Spanish</td>
              <td>
                <a href="">Show</a>
              </td>
            </tr>
            <tr>
              <td>Tonya Campbell</td>
              <td>tonya.campbell@oci.com</td>
              <td>24</td>
              <td className="sv-text-center">
                <i className="fa fa-female fa-fw" title="Female" />
              </td>
              <td>Leader</td>
              <td>Orlando</td>
              <td>English</td>
              <td>
                <a href="">Show</a>
              </td>
            </tr>
            <tr>
              <td>Gina Ryan</td>
              <td>gina.ryan@onesite.com.au</td>
              <td>27</td>
              <td className="sv-text-center">
                <i className="fa fa-female fa-fw" title="Female" />
              </td>
              <td>Senior</td>
              <td>Sidney</td>
              <td>English</td>
              <td>
                <a href="">Show</a>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="8" className="sv-text-center">
                <button className="sv-button link link-info" disabled="">
                  <i className="fa fa-chevron-left fa-fw" />
                  Anterior
                </button>
                <button className="sv-button link link-info">
                  Próximo
                  <i className="fa fa-chevron-right fa-fw" />
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

ListPage.propTypes = {
  resourceUrl: PropTypes.string.isRequired,
};

export default ListPage;
