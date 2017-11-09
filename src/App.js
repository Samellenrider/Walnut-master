import React, { Component } from 'react';
import customers from './customers.json';
import './styles.scss';


const CustomerRow = ({customer}) => (
  <tr>
    <td>{customer.title} {customer.first_name} {customer.last_name}</td>
    <td>{customer.profession}</td>
    <td>{customer.has_children ? "Yes" : "No"}</td>
    <td class="traits">
      <span>{customer.dominant_traits[0].level}</span>
      <span>{customer.dominant_traits[0].primary_trait},</span>
      <span>{customer.dominant_traits[1].level}</span>
      <span>{customer.dominant_traits[1].secondary_trait},</span>
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
        <div id="container">
        <table class="topRow">
          <thead>
            <tr>
              <th>Name</th>
              <th>Profession</th>
              <th>Children</th>
              <th>Traits</th>
            </tr>
          </thead>
        </table>
        <div id="list">
          <table class="table">
            <tbody>
              {
                customers.map(c => <CustomerRow customer={c}/>)
              }
            </tbody>
          </table>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
