// src/controllers/aboutController.js

import { aboutContent } from "../utils/contents.js";

export const renderAboutPage = async (req, res) => {
    try {
        // Fetch items from the database
        //const items = await Item.find({ list: 'today' });

        res.render('about', {
            aC: aboutContent
        });
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).send('Internal Server Error');
    }
};