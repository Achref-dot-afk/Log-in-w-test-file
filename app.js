const express = require('express');
const User = require('./models/User');
const app = express();

app.use(express.json());


// create a post request
app.post('/add-user', async (req, res) => {
  const { username, password } = req.body;
  const userExists = await User.findOne({ username, password });
  if (userExists) {
    res.status(200).send('User already exists');
  } else {
    const user = new User({ username, password });
    await user.save();
    res.status(404).send('User created');
  }
});

// Serve the welcome page
app.get('/add-user', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

module.exports = app;
/*The reason app.listen() is starting the server automatically when you run your tests is likely because you are importing your main application file (index.js or app.js) directly in your test file. When the test file is loaded, it executes the code in your main application file, which includes the call to app.listen(), leading to the automatic server startup.*/