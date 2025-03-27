const express = require('express');
const { mongoConnection } = require('./config/mongoDBConnection');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes.js');

const app = express();
app.use(express.json());

const PORT =process.env.PORT;

mongoConnection().then(()=> {
    app.listen(PORT, ()=> {
        console.log(`Server running on port: ${PORT}`)
    });
}).catch((error)=> {
    console.error(`Failed to start the server:`, error);
    process.exit(1)
});
app.use('/api/v1/user', authRoutes);


// testing root endpoint
app.use('/', (req, res)=> {
    res.status(200).json('Testing root endpoint..!')
})
