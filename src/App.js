import React, { Component } from 'react';
import ReactScrollTable from 'react-scroll-table';
import customers from './customers.json';
import './styles.scss';

const CustomerRow = ({customer}) => (
  <tr>
    <td>{customer.title} {customer.first_name} {customer.last_name}</td>
    <td>{customer.profession}</td>
    <td>{customer.has_children ? "Yes" : "No"}</td>
    <td>
      {customer.dominant_traits[0].level}
      {customer.dominant_traits[0].primary_trait},
      {customer.dominant_traits[1].level}
      {customer.dominant_traits[1].secondary_trait},
    </td>
  </tr>
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Walnut</h1>
        </header>
        <table>
          <thead>
            <tr id="toprow">
              <th>Name</th>
              <th>Profession</th>
              <th>Children</th>
              <th>Traits</th>
            </tr>
          </thead>
        </table>
        <div id="list">
          <table>
            <tbody id="text">
              {
                customers.map(c => <CustomerRow customer={c}/>)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
