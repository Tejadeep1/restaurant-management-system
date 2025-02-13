import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = ({ cart, onAddToCart }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/menu');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        console.log('Fetched menu items:', data);
        setMenuItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const handleQuantityChange = (id, value) => {
    if (value < 1) return; // Ensure quantity is not less than 1
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: value,
    }));
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-danger">
        Error: {error}
        <button onClick={() => window.location.reload()} className="btn btn-link">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center my-3">Restaurant Menu</h1>
      <div className="row">
        {menuItems.map((item) => (
          <div key={item.id} className="col-md-3 mb-3">
            <div
              className="card"
              style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #ddd',
                borderRadius: '10px',
              }}
            >
              <img
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="text-muted">Price: {item.price.toFixed(2)}</p>
                {item.quantity === 0 ? ( // Check if quantity is zero
  <p className="text-danger">Out of Stock</p>
) : (
  <div className="d-flex align-items-center">
    <button
      className="btn btn-secondary me-2"
      onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 1) - 1)}
      disabled={(quantities[item.id] || 1) <= 1} // Disable if quantity is 1
      aria-label={`Decrease quantity for ${item.name}`}
    >
      -
    </button>
    <input
      type="number"
      min="1"
      value={quantities[item.id] || 1}
      onChange={(e) =>
        handleQuantityChange(item.id, parseInt(e.target.value))
      }
      className="form-control me-2"
      style={{ width: '80px' }}
      aria-label={`Quantity for ${item.name}`}
    />
    <button
      className="btn btn-secondary me-2"
      onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 1) + 1)}
      aria-label={`Increase quantity for ${item.name}`}
    >
      +
    </button>
    <button
      className="btn btn-primary"
      onClick={() => onAddToCart(item, quantities[item.id] || 1)}
      aria-label={`Add ${item.name} to cart`}
    >
      Add
    </button>
  </div>
)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;