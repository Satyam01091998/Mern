import express from 'express';
const router = express.Router();


import { getContacts, createContact, getContact, updateContact, deleteContact } from '../controllers/contactController.js';


router.route('/').get((req, res) => {
    res.status(200).json({
        message: 'Welcome to the Contacts API'
    });
});

router.route('/')   
    .get(getContacts) // Get all contacts
    .post(createContact); // Create a new contact     

router.route('/:id')
    .put(updateContact) // Update a contact by ID
    .delete(deleteContact); // Delete a contact by ID           



export default router;