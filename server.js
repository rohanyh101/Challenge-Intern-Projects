const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel')
require('dotenv').config()

// Initialize Express app
const app = express();

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected...'))
// .catch(err => console.error(err));

(async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
})()

// Define API endpoint to fetch aggregated user data
app.get('/api/user-data', async (req, res) => {
    try {
        const userData = await User.aggregate([
            {
                $group: {
                    _id: "$country",
                    totalUsers: { $sum: 1 },
                    totalAge: { $sum: "$age" }
                }
            },
            {
                $project: {
                    country: "$_id",
                    totalUsers: 1,
                    averageAge: { $divide: ["$totalAge", "$totalUsers"] }
                }
            },
            {
                $group: {
                    _id: null,
                    totalUsers: { $sum: "$totalUsers" },
                    totalCountries: { $sum: 1 },
                    averageAge: { $avg: "$averageAge" },
                    countries: { $push: { country: "$country", totalUsers: "$totalUsers" } }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalUsers: 1,
                    totalCountries: 1,
                    averageAge: 1,
                    countries: 1
                }
            }
        ]);
        res.json(userData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
