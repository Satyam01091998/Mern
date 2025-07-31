
console.log('Server is running...');
import express, { application } from 'express';
import dotenv from 'dotenv';    
import cors from 'cors'; // Importing CORS for cross-origin requests


const app = express();
const PORT = process.env.PORT || 5001;
import contactRoutes from './routes/contactRoutes.js';
app.use(express.json());
dotenv.config(); 

import connectDB from './config/dbConnection.js'; 
connectDB(); // Connect to MongoDB
app.use(cors()); // Use CORS middleware
app.use('/api/contacts', contactRoutes); // Use the contact routes

// declaration of middleware
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Server'
    });     

}); 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 



