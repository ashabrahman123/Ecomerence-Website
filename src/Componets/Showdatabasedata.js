// DisplayData.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';


const DisplayData = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('products').get();
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(products);
      } catch (error) {
        console.error('Error fetching data from Firebase: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <p>ID: {product.id}</p>
            <p>Title: {product.title}</p>
            {/* Add similar lines for other fields */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
