const app = require('./app');
const mongoose = require('mongoose');
const x=0;

// Connect to the database
mongoose
  .connect('mongodb://127.0.0.1:27017/login-db')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Error connecting to the database', err);
  });

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
