import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './db.js';
import ticketRoute from './routes/ticketRoute.js'
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(ticketRoute);

// Add this route to respond to root URL
app.get('/', (req, res) => {
    res.send('API is running...');
});


app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on port ${PORT}`)
})