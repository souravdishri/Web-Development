// src/controllers/workController.js
import { workItems } from '../utils/items.js';
import Item from "../models/itemModel.js";

export const renderWorkPage = async (req, res) => {
    try {
        // Fetch items from the database
        const workItems = await Item.find({ list: 'work' });

        res.render("list", {
            listTitle: "Work List",
            newListItems: workItems,
        });
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).send('Internal Server Error');
    }
};




export const handleWorkPostRequest = async (req, res) => {
    const itemName = req.body.newItem;

    try {
        // Creating a new document
        const newItem = new Item({
            name: itemName,
            list: 'work', 
            // other fields...
        });
        // Validate the instance asynchronously
        await newItem.validate();
        // Saving the document to the database
        await newItem.save();
        workItems.push(newItem);

        res.redirect("/work");
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).send('Internal Server Error');
    }
};








// export const handleWorkPostRequest = (req, res) => {
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// };
