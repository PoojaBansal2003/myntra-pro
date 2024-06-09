const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./utils/errorHandler');
const authRoutes = require('./routes/authRoutes');
const { MONGODB_URI, PORT } = require('./config/dbConfig');

const cosineSimilarity = require('compute-cosine-similarity');
const Product = require('./models/Product'); // Import Product model
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Routes
app.use('/api/auth', authRoutes);

// products
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

const data = [];

// Load data from CSV file
fs.createReadStream(path.join(__dirname, 'data/products.csv'))
  .pipe(csv())
  .on('data', (row) => {
    // Modify this part according to your CSV structure
    const name = row.name;
    const description = row.description;
    // Add other fields as needed

    // Push the row data into the data array
    data.push({ name, description });
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    // console.log('Data:', data); // Log the parsed data
  })
  .on('error', (error) => {
    console.error('Error processing CSV file:', error);
  });

// Tokenize and stem function
const tokenizeStem = (text) => {
  // A simple tokenizer and stemmer can be implemented here or use a library.
  return text.toLowerCase().split(/\s+/);
};

// Pad array with zeros to ensure equal length
const padArray = (arr, length) => {
  while (arr.length < length) {
    arr.push(0);
  }
  return arr;
};

// Search endpoint
app.post('/search', async (req, res) => {
  try {
    // Extract query from request body
    const query = req.body.query;
    console.log('Query:', query);

    // Tokenize and stem the query
    const stemmedQuery = tokenizeStem(query);

    // Calculate similarity for each product
    const results = data.map(product => {
      const productText = `${product.name} ${product.description}`;
      const stemmedProductText = tokenizeStem(productText);

      // Pad arrays with zeros if they have different lengths
      const maxLength = Math.max(stemmedQuery.length, stemmedProductText.length);
      const paddedQuery = padArray(stemmedQuery, maxLength);
      const paddedProductText = padArray(stemmedProductText, maxLength);

      const similarity = cosineSimilarity(paddedQuery, paddedProductText);
      console.log("Similarity:", similarity);
      return { ...product, similarity }; // No need for toObject()
    });

    // Sort results by similarity
    results.sort((a, b) => b.similarity - a.similarity);

    // Return top 10 similar products
    res.json({ products: results.slice(0, 10) });
  } catch (error) {
    // Handle errors
    console.error('Error searching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Error handler
app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
