import React, { useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function Dashboard() {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:8000/search?query=${query}`);
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter product query"
        />
        <button type="submit" disabled={loading}>{loading ? 'Searching...' : 'Search'}</button>
      </form>

      {recommendations.length > 0 && (
        <div>
          <h2>Recommendations:</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {recommendations.map((product, index) => (
              <div style={{ width: '200px', margin: '10px', border: '1px solid #ccc', padding: '10px' }} key={index}>
                <img src={JSON.parse(product.image)[0]} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <h3>{product.name}</h3>
                <p>{product.brand}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
