import React from 'react';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import { FaUser, FaUtensils, FaShoppingCart, FaCalendarAlt, FaClipboardList, FaBox } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from './1.png'; // Import your logo image

const Navbar = ({ username, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token
    localStorage.removeItem('username'); // Clear username
    navigate('/login'); // Redirect to login page
  };

  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Brand Logo and Name */}
        <BsNavbar.Brand
          onClick={() => setActiveTab('menu')}
          style={{ cursor: 'pointer' }}
        >
          
          <h3>Restaurant Manager</h3>
        </BsNavbar.Brand>

        {/* Navbar Toggle for Mobile */}
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Menu Management Tab */}
            <Nav.Link
              active={activeTab === 'menu'}
              onClick={() => setActiveTab('menu')}
              className="ms-3"
            >
              <FaUtensils className="me-1" /> Menu
            </Nav.Link>

            {/* Order Management Tab */}
            <Nav.Link
              active={activeTab === 'orders'}
              onClick={() => setActiveTab('orders')}
              className="ms-3"
            >
              <FaClipboardList className="me-1" /> Orders
            </Nav.Link>

            {/* Reservation Management Tab */}
            <Nav.Link
              active={activeTab === 'reservations'}
              onClick={() => setActiveTab('reservations')}
              className="ms-3"
            >
              <FaCalendarAlt className="me-1" /> Reservations
            </Nav.Link>

            {/* Inventory Management Tab */}
            <Nav.Link
              active={activeTab === 'inventory'}
              onClick={() => setActiveTab('inventory')}
              className="ms-3"
            >
              <FaBox className="me-1" /> Inventory
            </Nav.Link>
          </Nav>

          {/* User Info and Logout Button */}
          <Nav>
            <Nav.Link disabled className="text-light">
              <FaUser className="me-1" /> {username || "Guest"}
            </Nav.Link>
            <Nav.Link onClick={handleLogout} className="text-danger">
              Logout
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;