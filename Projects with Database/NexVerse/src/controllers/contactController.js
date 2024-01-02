// src/controllers/contactController.js

import { contactContent } from "../utils/contents.js";

export const renderContactPage = async (req, res) => {
    try {
        // Fetch items from the database
        //const items = await Item.find({ list: 'today' });

        res.render('contact', {
            cC: contactContent
        });
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).send('Internal Server Error');
    }
};