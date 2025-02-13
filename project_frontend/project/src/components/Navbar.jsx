import React from 'react';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import { FaUser, FaUtensils, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa'; // Import the specific icon
import logo from './1.png'; // Import the image

const Navbar = ({ username, activeTab, setActiveTab, cartCount }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token
    localStorage.removeItem('username'); // Clear username
    navigate('/login'); // Redirect to login page
  };

  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" fixed="top"> {/* Sticky navbar */}
      <Container>
        <BsNavbar.Brand 
          onClick={() => setActiveTab('menu')} 
          style={{ cursor: 'pointer' }}
        >
          <img
            src={logo} // Path to the logo in the public folder
            alt="Restaurant Logo"
            width="30"
            height="30"
            className="d-inline-block align-top me-2" // Add margin-right
          />
          <h3>Food Fusion</h3>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active={activeTab === 'menu'} onClick={() => setActiveTab('menu')}className="ms-5">
              <FaUtensils className="me-1" /> Menu
            </Nav.Link>
            <Nav.Link active={activeTab === 'reservation'} onClick={() => setActiveTab('reservation')}className="ms-5">
              <FaCalendarAlt className="me-1" /> Reservation
            </Nav.Link>
          
            <Nav.Link active={activeTab === 'cart'} onClick={() => setActiveTab('cart')}className="ms-5">
              <FaShoppingCart className="me-1" /> Cart
              {cartCount > 0 && <span className="badge bg-danger ms-1">{cartCount}</span>}
            </Nav.Link>

            <Nav.Link active={activeTab === 'aboutus'} onClick={() => setActiveTab('aboutus')} className="ms-5">
              <FaInfoCircle className="me-1" /> About Us      
            </Nav.Link>
          </Nav>

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