import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './Menu';
import Cart from './Cart';
import Aboutus from './Aboutus'; 
import Reservation from './ReservationForm';
import TableList from './TableList';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('menu'); // Default tab
  const [cart, setCart] = useState([]); // Cart state
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Retrieve username from localStorage
  const [selectedTableId, setSelectedTableId] = useState(null);

  // Check if the user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  // Function to add items to the cart
  const handleAddToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: quantity,
        },
      ]);
    }

    alert(`Added ${quantity} ${item.name}(s) to cart!`);
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Function to update the quantity of an item in the cart
  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to handle table selection
  const handleTableSelect = (tableId) => {
    setSelectedTableId(tableId);
    setActiveTab('reservation'); // Switch to reservation tab
  };

  // Render the active component based on the selected tab
  const renderComponent = () => {
    switch (activeTab) {
      case 'menu':
        return <Menu onAddToCart={handleAddToCart} />;
      case 'cart':
        return (
          <Cart
            cart={cart}
            onRemoveItem={handleRemoveItem}
            onUpdateQuantity={handleUpdateQuantity}
          />
        );
      case 'reservation':
        return selectedTableId ? (
          <Reservation tableId={selectedTableId} />
        ) : (
          <TableList onTableSelect={handleTableSelect} />
        );

      case 'aboutus':
        return <Aboutus />;
      
      default:
        return <Menu onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div>
      {/* Sticky Navbar with username */}
      <Navbar
        username={username}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cart.length}
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

export default MainPage;