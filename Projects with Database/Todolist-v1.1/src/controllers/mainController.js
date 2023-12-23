// src/controllers/mainController.js
import getDate from '../utils/date.js';
import {items} from "../utils/items.js";
import Item from "../models/itemModel.js";

export const renderHomePage = async (req, res) => {
    try {
        // Fetch items from the database
        const items = await Item.find({ list: 'today' });

        let day = getDate();
        res.render("list", {
            listTitle: day,
            newListItems: items,
        });
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).send('Internal Server Error');
    }
};



export const handleItemPostRequest = async (req, res) => {
    const itemName = req.body.newItem;

    try {
        // Creating a new document
        const newItem = new Item({
            name: itemName,
            list:'today'
            // other fields...
        });

        // Validate the instance asynchronously
        await newItem.validate();

        // Saving the document to the database
        await newItem.save();
        items.push(newItem);

        res.redirect("/");

    } catch (error) {

        // Assertions to check validation errors
        // console.assert(error.errors['name'].message === 'Name is required', 'name validation failed');
        // console.assert(error.errors['list'].message === '{} is not supported', 'list validation failed');

        console.error('Error creating item:', error);
        res.status(500).send('Internal Server Error');
    }
};

