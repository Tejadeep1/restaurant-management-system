import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  // Restaurant details
  const restaurantDetails = {
    name: 'Food Fussion',
    email: 'Foodfussion@gmail.com',
    phone: '+91 6303411502',
    instagram: 'http://www.instagram.com/food_fussion',
    twitter: 'http://twitter.com/food_fussion',
    address: '345, 4th Cross Rd, Neeladri Nagar, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100',
  };

  return (
    <div
  className="container mt-5"
  style={{
    background: 'linear-gradient(to right,rgb(74, 213, 226), #50e3c2)', // Use quotes around the gradient
    padding: '20px',
    borderRadius: '8px',
  }}
>
  <h2 className="text-center mb-4">About Us</h2>

      {/* Restaurant Details Section */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Restaurant Details</h5>
          <p className="card-text">
            <strong>Name:</strong> {restaurantDetails.name}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {restaurantDetails.email}
          </p>
          <p className="card-text">
            <strong>Phone:</strong> {restaurantDetails.phone}
          </p>
          <p className="card-text">
            <strong>Address:</strong> {restaurantDetails.address}
          </p>
          <p className="card-text">
            <strong>Instagram:</strong>{' '}
            <a href={restaurantDetails.instagram} target="_blank" rel="noopener noreferrer">
              @foodfusion
            </a>
          </p>
          <p className="card-text">
            <strong>Twitter:</strong>{' '}
            <a href={restaurantDetails.twitter} target="_blank" rel="noopener noreferrer">
              @food_fusion
            </a>
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;