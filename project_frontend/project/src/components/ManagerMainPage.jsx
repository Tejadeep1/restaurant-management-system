import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavbarMan';
import MenuManagement from '../components/MenuManagement';
import OrderManagement from '../components/OrderManagement';
import ReservationManagement from '../components/ReservationManagement';
import InventoryManagement from '../components/InventoryManagement';

const ManagerMain = () => {
  const [activeTab, setActiveTab] = useState('menu'); // Default tab
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Retrieve username from localStorage

  // Check if the user is authenticated
  React.useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  // Render the active component based on the selected tab
  const renderComponent = () => {
    switch (activeTab) {
      case 'menu':
        return <MenuManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'reservations':
        return <ReservationManagement />;
      case 'inventory':
        return <InventoryManagement />;
      default:
        return <MenuManagement />;
    }
  };

  return (
    <div>
      {/* Sticky Navbar with username */}
      <Navbar
        username={username}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content with padding and margin */}
      <div className="container mt-5 pt-4 mb-5" style={{ paddingTop: '80px' }}>
        {renderComponent()}
      </div>
      <footer className="bg-dark text-light text-center py-3 mt-5 mb-0">
        <p className="mb-0">&copy; 2025 Restaurant App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ManagerMain;