
import asyncHandler from 'express-async-handler';

import Contact from '../models/contactModels.js';


const getContacts = asyncHandler(
    async(req, res) => {
    const contacts = await Contact.find({});
    console.log("Contacts fetched:", contacts);
    res.status(200).json({
        message: "Get of contacts",contacts
    });
});


const createContact = asyncHandler(
    async(req, res) => {
    console.log("The request body is:",req.body);
    const { name, email, phone } = req.body;
    if(!name || !email || !phone)   {
        res.status(400)
        throw new Error('Please add all fields');
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    console.log("Contact created:", contact);
    res.status(201).json({
        message: "Create a new contact",contact
    });
});

const getContact = asyncHandler(
    async(req, res) => {
        const contact = await Contact.findById(req.params.id);
        if(!contact) {
            res.status(404);
            throw new Error('Contact not found');
        }
        
    res.status(200).json(contact);});

const updateContact = asyncHandler(
    async(req, res) => {
        const contact = await Contact.findById(req.params.id);
        if(!contact) {
            res.status(404);
            throw new Error('Contact not found');
        }
    // Update the contact
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true});        

    
    res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(
    async(req, res) => {
        contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    // Delete the contact
    await Contact.findByIdAndDelete(req.params.id);
    
    res.status(200).json(contact);
});


export  {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};