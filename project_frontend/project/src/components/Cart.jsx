import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Cart = ({ cart, onRemoveItem, onProceedToPayment, onUpdateQuantity }) => {
  const totalAmount = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleProceedToPayment = async () => {
    try {
      // Send each item in the cart to the backend
      for (const item of cart) {
        const cartItem = {
          userId: 1, // Replace with actual user ID
          menuId: item.id,
          quantity: item.quantity,
          price: item.price,
        };

        const response = await fetch('http://localhost:8080/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartItem),
        });

        if (!response.ok) {
          throw new Error('Failed to update cart');
        }
      }

      // Call the onProceedToPayment callback
      onProceedToPayment();
    } catch (error) {
      console.error('Error:', error);
      alert('Order is placed successfully');
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>{cartItem.name}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => onUpdateQuantity(cartItem.id, cartItem.quantity - 1)}
                        disabled={cartItem.quantity <= 1} // Disable if quantity is 1
                      >
                        -
                      </Button>
                      <span className="mx-2">{cartItem.quantity}</span>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => onUpdateQuantity(cartItem.id, cartItem.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>{cartItem.price.toFixed(2)}</td>
                  <td>{(cartItem.quantity * cartItem.price).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onRemoveItem(cartItem.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4 className="text-end">
            Total Amount: <span className="text-primary">RS : {totalAmount.toFixed(2)}</span>
          </h4>
          <div className="text-end mt-4">
            <Button
              variant="success"
              size="lg"
              onClick={handleProceedToPayment}
            >
              Place Order
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;