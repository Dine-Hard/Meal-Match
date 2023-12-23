const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

// handle parsing request body
app.use(express.json());

// handle requests for static files
app.use('/', express.static(path.join(__dirname, '../src/index.html')));

// define route handlers
app.get('/', (req, res) => {
    // Render the poll/vote page
    // You can send the poll options and other necessary data to the front-end here
    res.status(200).sendFile(path.join(__dirname, '../src/index.html'));    // make the correct path
});

app.post('/vote', (req, res) => {
    const { option } = req.body;
    
    // Process the vote and update the poll results accordingly
    // You can store the votes in a database or any other data storage mechanism
    
    res.status(200).json({ message: 'Vote submitted successfully' });
});

// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
