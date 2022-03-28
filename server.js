// express server creation

//step 1: create an express app instance
const express = require('express');
const app = express();

//step 2: create a port number for the server to listen on (port 3000 is the default convention)
const port = 3000;

//step 3: create a route for the server
app.get('/', (request, response) => {
    response.send('Hello World from Express');
});

//step 4: start the server
app.listen(port, () => {
    console.log(`Express server is running and listening on port ${port}`);
});






