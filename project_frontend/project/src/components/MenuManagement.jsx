import React, { useState, useEffect } from 'react';
import { Table, Form, Button, Container, Alert } from 'react-bootstrap';

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    quantity: '',
    imageUrl: '',
  });
  const [editItemId, setEditItemId] = useState(null);
  const [error, setError] = useState('');

  // Fetch menu items from the backend
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/menu');
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        setError('Failed to fetch menu items.');
      }
    };

    fetchMenuItems();
  }, []);

  // Handle input change for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: name === 'quantity' ? parseInt(value) : value });
  };

  // Add or update a menu item
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting item:', newItem); // Log the newItem object

    try {
      if (editItemId) {
        // Update existing item
        const response = await fetch(`http://localhost:8080/api/menu/${editItemId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItem),
        });
        const updatedItem = await response.json();
        setMenuItems(menuItems.map((item) => (item.id === editItemId ? updatedItem : item)));
        setEditItemId(null); // Reset edit mode
      } else {
        // Add new item
        const response = await fetch('http://localhost:8080/api/menu', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItem),
        });
        const addedItem = await response.json();
        setMenuItems([...menuItems, addedItem]);
      }
      // Reset form
      setNewItem({ name: '', price: '', description: '', category: '', quantity: '', imageUrl: '' });
    } catch (error) {
      setError('Failed to save menu item.');
    }
  };

  // Delete a menu item
  const handleDeleteItem = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/menu/${id}`, { method: 'DELETE' });
      setMenuItems(menuItems.filter((item) => item.id !== id));
    } catch (error) {
      setError('Failed to delete menu item.');
    }
  };

  // Set the item to be edited
  const handleEditItem = (item) => {
    setNewItem({
      name: item.name,
      price: item.price,
      description: item.description,
      category: item.category,
      quantity: item.quantity, // Ensure quantity is included
      imageUrl: item.imageUrl,
    });
    setEditItemId(item.id);
  };

  return (
    <Container>
      <h2 className="my-4">Menu Management</h2>
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Add/Edit Form */}
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={newItem.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Enter price"
            value={newItem.price}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter description"
            value={newItem.description}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Enter category"
            value={newItem.category}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            placeholder="Enter Quantity"
            value={newItem.quantity}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            placeholder="Enter image URL"
            value={newItem.imageUrl}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          {editItemId ? 'Update Item' : 'Add Item'}
        </Button>
      </Form>

      {/* Menu Items Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditItem(item)} className="me-2">
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDeleteItem(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MenuManagement;