import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/db.js';
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'

connectDB();

const app = express();

// help us to parse the raw json data...
app.use(express.json());

// this will allow us to send the form data...
app.use(express.urlencoded({extended: true}));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is upp and running...'));

app.listen(port, () => console.log(`Server started on port ${port}`));