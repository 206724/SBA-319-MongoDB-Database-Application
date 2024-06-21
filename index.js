const express = require('express');
const mongoose = require('mongoose');
const songRoutes = require('./routes/songRoutes');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://mogesfeyissa:4X26KT3nqe3n7Yb1@cluster0.5gwvw4u.mongodb.net/', {

});

// Use the cors middleware to enable Cross-Origin Resource Sharing
app.use(cors());
app.use(express.json());
app.use('/api', songRoutes);
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});