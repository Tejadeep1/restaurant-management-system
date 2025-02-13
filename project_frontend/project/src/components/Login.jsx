import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    role: 'USER', // Default role set to USER
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(
        'http://localhost:8080/api/users/login',
        credentials
      );

      if (response.status === 200) {
        // Store authentication data
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('username', credentials.username); // Store username
        localStorage.setItem('role', credentials.role); // Store role

        // Navigate based on role
        if (credentials.role === 'USER') {
          navigate('/main'); // Navigate to user main page
        } else if (credentials.role === 'ADMIN') {
          navigate('/managermainpage'); // Navigate to admin main page
        }
      }
    } catch (error) {
      setError(
        error.response?.data?.message || 
        'Login failed. Please check your credentials.'
      );
    }
  };

  return (
    <Container className="mt-5">
      <h1 style={{ textAlign: 'center' }}>Welcome to Food Fusion</h1>
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Login</Card.Title>
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Login As</Form.Label>
                  <Form.Select
                    name="role"
                    value={credentials.role}
                    onChange={handleChange}
                  >
                    <option value="USER">User </option>
                    <option value="ADMIN">Admin</option>
                  </Form.Select>
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-3">
                Don't have an account? <a href="/register">Register here</a>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Login;