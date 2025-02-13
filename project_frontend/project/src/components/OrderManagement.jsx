import React, { useState, useEffect } from 'react';
import { Table, Form, Alert, Button } from 'react-bootstrap';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  // Fetch order data from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cart');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        setError('Error fetching orders: ' + error.message);
      }
    };

    fetchOrders();
  }, []);

 

  

  return (
    <div className="container mt-4">
      <h2>Order Management</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Menu ID</th>
            <th>Quantity</th>
            <th>Price</th>
            
           
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              
              <td>{order.userId}</td>
              <td>{order.menuId}</td>
              <td>{order.quantity}</td>
              <td>${order.price.toFixed(2)}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderManagement;