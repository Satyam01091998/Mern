
console.log('Server is running...');
import express, { application } from 'express';
import dotenv from 'dotenv';    
 

const app = express();
const PORT = process.env.PORT || 5000;
import contactRoutes from './routes/contactRoutes.js';

dotenv.config(); 
app.use('/api/contacts', contactRoutes); // Use the contact routes

// declaration of middleware
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Server'
    });     

}); 

app.use(express.json()); // Middleware to parse JSON bodies




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 



