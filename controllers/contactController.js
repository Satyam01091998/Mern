

const getContacts = (req, res) => {
    res.status(200).json({
        message: "Get of contacts"
    });
};


const createContact = (req, res) => {
    console.log(req.body);
    const contact = req.body;
    if(!name || !email || !phone)   {
        res.status(400)
        throw new Error('Please add all fields');
    }
    res.status(201).json({
        message: "Create a new contact",
        contact
    });
};

const getContact = (req, res) => {
    res.status(200).json({
        message: `Get contact with ID ${req.params.id}`
    });
};

const updateContact = (req, res) => {
    const { id } = req.params;
    const contact = req.body;
    res.status(200).json({
        message: `Update contact with ID ${req.params.id}`,
        contact
    });
};

const deleteContact = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: `Delete contact with ID ${req.params.id}`
    });
};


export  {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};