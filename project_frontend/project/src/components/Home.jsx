import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Restaurant Management System</h1>
      <p>Please log in or register to access your account.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Log In
          </button>
        </Link>
        <Link to="/register">
          <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;