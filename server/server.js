const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Connect to MongoDB Atlas
mongoose.connect('process.env.MONGODB_URL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

// Define your routes here

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
