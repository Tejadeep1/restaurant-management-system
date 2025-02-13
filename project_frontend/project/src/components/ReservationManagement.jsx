import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reservation from './ReservationForm'; // Import the ReservationForm component

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null); // Track the selected table for reservation

  // Fetch all reservations from the backend
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/reservations');
        setReservations(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  // Handle selecting a table for reservation


  if (loading) {
    return <div className="text-center mt-5">Loading reservations...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <p className="text-danger">Error: {error}</p>
        <button onClick={() => window.location.reload()} className="btn btn-link">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Reservation Management</h2>

      {/* Display Reservations */}
      <h4>Current Reservations</h4>
      <table className="table table-bordered table-striped">
        <thead className="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Guests</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res.id}>
              <td>{res.name}</td>
              <td>{res.email}</td>
              <td>{res.phone}</td>
              <td>{res.guests}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationManagement;