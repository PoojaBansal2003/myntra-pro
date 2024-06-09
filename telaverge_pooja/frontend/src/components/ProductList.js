import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';
import Wishlist from './Wishlist';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // State to control popup message

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    setShowPopup(true); // Show the popup message
    setTimeout(() => {
      setShowPopup(false); // Hide the popup message after 2 seconds
    }, 2000);
  };

  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error: {error}</p>;

  const uniqueCategories = [...new Set(products.map(product => product.category))];
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category.includes(selectedCategory);
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div style={styles.container}>
      <div style={styles.controls}>
        <div style={styles.dropdownContainer}>
          <label htmlFor="categorySelect" style={styles.label}>Select Category:</label>
          <select id="categorySelect" onChange={handleCategoryChange} value={selectedCategory} style={styles.dropdown}>
            <option value="All">All</option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={styles.searchInput}
          />
          <button onClick={handleSearch} style={styles.searchButton}>Search</button>
        </div>
      </div>
      {/* Popup message */}
      {showPopup && (
        <div style={styles.popup}>
          <p style={styles.popupText}>Added to Wishlist</p>
        </div>
      )}
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul style={styles.list}>
          {filteredProducts.map((product) => (
            <li key={product._id} style={styles.listItem}>
              <h2>{product.name}</h2>
              <p><strong>Price:</strong> ${product.price}</p>
              <p>{product.description}</p>
              <img
                src={product.image}
                alt={product.name}
                style={styles.image}
              />
              <button onClick={() => addToWishlist(product._id)} style={styles.addToWishlistButton}>
                Add to Wishlist
              </button>
            </li>
          ))}
        </ul>
      )}
      <Wishlist wishlist={wishlist} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  dropdownContainer: {
    marginRight: '50px',
  },
  label: {
    margin: '20px',
    fontFamily : 'bold',
    fontSize: '18px',
  },
  dropdown: {
    padding: '8px 14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  searchContainer: {
    display: 'flex',
    marginRight: '170px',
  },
  searchInput: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    marginRight: '10px',
    width: '300px',
  },
  searchButton: {
    padding: '10px 20px',
    backgroundColor: 'purple',
    color: '#fff',
    border: 'none',
    borderRadius: '15px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
  },
  image: {
    maxWidth: '200px',
  },
  addToWishlistButton: {
    padding: '10px 20px',
    backgroundColor: 'maroon',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginRight: '-145px',
  },
  popup: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#4b0082', // Dark purple color
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    marginBottom:'640px',
    marginLeft: '590px',
    zIndex: '999', // Ensure popup is on top of other elements
    animation: 'fadeInOut 2s ease', // Apply fade in/out animation
    },
    popupText: {
      margin: '0',
      fontWeight: 'bold',
    },
    '@keyframes fadeInOut': {
      '0%': { opacity: 0 },
      '50%': { opacity: 1 },
      '100%': { opacity: 0 },
    },
  };
  
  export default ProductList;
  