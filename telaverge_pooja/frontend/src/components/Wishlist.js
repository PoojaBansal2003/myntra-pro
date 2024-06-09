import React from 'react';

const Wishlist = ({ wishlist }) => {
  if (!wishlist || wishlist.length === 0) {
    return <p>Your wishlist is empty</p>;
  }

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            {/* Add any other details you want to display */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
