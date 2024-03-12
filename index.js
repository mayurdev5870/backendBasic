require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000;

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/home', (req, res) => {
    res.send('this is the home page of the application');
})

app.get('/login', (req, res) => {
   res.send('<h1>Hey this is your login page</h1>');
})

app.listen(port, () => {
    console.log(`Node basic server is listening on port ${port}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
