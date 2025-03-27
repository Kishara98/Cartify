const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT =process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`)
});

app.use('/', (req, res)=> {
    res.status(200).json('Testing root endpoint..!')
})