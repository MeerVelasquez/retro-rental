import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import './css/tabla.css';

const CustomerTable = ({ customers }) => {
  const [filter, setFilter] = useState('all');

  const mostCommonName = customers.reduce((acc, customer) => {
    acc[customer.name] = (acc[customer.name] || 0) + 1;
    return acc;
  }, {});

  const topCustomerName = Object.keys(mostCommonName).reduce((a, b) => (mostCommonName[a] > mostCommonName[b] ? a : b), '');

  const filteredCustomers = customers.filter((customer) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'activo' || filter === 'inactivo') {
      return customer.status === filter;
    } else if (filter === 'customer') {
      return customer.name === topCustomerName;
    }
    return false;
  });

  return (
    <div className='table-container'>
      <div className='title-cont'>
        <h2>My Rents</h2>
      </div>
      <div className='botones'>
        <Button variant="btn btn-primary" onClick={() => setFilter('all')}>All</Button>{' '}
        <Button variant="btn btn-success" onClick={() => setFilter('activo')}>Activo</Button>{' '}
        <Button variant="btn btn-danger" onClick={() => setFilter('inactivo')}>Inactivo</Button>{' '}
        <Button variant="btn btn-info" onClick={() => setFilter('customer')}>Top Customer</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Products</th>
            <th>Status</th>
            <th>Price</th>
            <th>Exp. Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer, index) => (
            <tr key={index}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={customer.image} alt={customer.name} style={{ marginRight: '10px', width: '50px', height: '50px', borderRadius: '50%' }} />
                  <div>
                    <div>{customer.name}</div>
                    <div>{customer.email}</div>
                  </div>
                </div>
              </td>
              <td>{customer.products}</td>
              <td>
              <div className='wrap' style={{ backgroundColor: getStatusColor(customer.status), padding: '5px', borderRadius: '5px', textAlign: 'center' }}>
                        <p className='status' style={{ margin: 0, }}>{customer.status}</p>
                </div>
              </td>
              <td>{customer.price}</td>
              <td>{customer['expdate']}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};








const getTextColor = (status) => {
  switch (status) {
    case 'inactivo':
      return 'blue';
    case 'activo':
      return 'green';
    case 'expired':
      return 'red';
    default:
      return 'black';
  }
};


const getStatusColor = (status) => {
  switch (status) {
    case 'inactivo':
      return 'lightblue';
    case 'activo':
      return 'lightgreen';
    case 'expired':
      return 'lightcoral';
    default:
      return 'white';
  }
};

export default CustomerTable;
