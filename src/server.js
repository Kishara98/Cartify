const express = require('express');
const { mongoConnection } = require('./config/mongoDBConnection');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT =process.env.PORT;

mongoConnection().then(()=> {
    app.listen(PORT, ()=> {
        console.log(`Server running on port: ${PORT}`)
    });
}).catch((error)=> {
    console.error(`Failed to start the server:`, error);
    process.exiti(1)
});

// testing root endpoint
app.use('/', (req, res)=> {
    res.status(200).json('Testing root endpoint..!')
})