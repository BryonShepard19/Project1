require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/users', require('./routes/users'));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || 'Server error'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));