import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image1 from './1.png'; // Import the first image
import image2 from './table1.jpeg'; // Import the second image
import image3 from './table2.jpeg'; // Import the third image
import image4 from './table3.jpeg'; // Import the fourth image
import image5 from './table4.jpeg'; // Import the fifth image

const TableList = ({ onTableSelect }) => {
  const [tables, setTables] = useState([]);

  // Array of imported images
  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/tables');
      setTables(response.data);
    } catch (error) {
      console.error('Error fetching tables:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Available Tables</h2>
      <div className="row">
        {tables.map((table, index) => (
          <div className="col-md-3 mb-3" key={table.id}>
            <div className="card">
              <img
                src={images[index % images.length]} // Cycle through the images array
                alt={`Table ${table.tableNumber}`}
                style={{ height: '200px', objectFit: 'cover' }} // Adjust image styling as needed
              />
              <div className="card-body">
                <h5 className="card-title">Table {table.tableNumber}</h5>
                <p className="card-text">Seats: {table.seats}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => onTableSelect(table.id)}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableList;