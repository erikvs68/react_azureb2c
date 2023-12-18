const express = require('express');
const cors = require('cors');

const app = express();

// Enable All CORS Requests
app.use(cors());

app.get('/api/resource', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
