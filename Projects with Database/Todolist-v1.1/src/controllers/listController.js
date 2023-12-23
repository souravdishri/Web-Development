// //Create a new controller for dynamic lists
// // /lists/${listName}` or /lists/tech

// // src/controllers/listController.js
// import Item from '../models/itemModel.js';
// import List from '../models/listModel.js';
// import { listItems } from '../utils/items.js';

// export const renderListPage = async (req, res) => {
//     const listName = req.params.listName;

//     try {
//         // Fetch items from the database for the specified list
//         const items = await List.find({ list: listName }).populate('items');

//         res.render('list', {
//             listTitle: listName,
//             newListItems: list.items,
//         });
//     } catch (error) {
//         console.error('Error fetching list items:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };

// export const handleListPostRequest = async (req, res) => {
//     const listName = req.params.listName;
//     const itemName = req.body.newItem;

//     try {
//         // Creating a new document for the specified list
//         const newItem = new List({
//             name: itemName,
//             list: listName, // Specify the list
//         });

//         // Validate the instance asynchronously
//         await newItem.validate();

//         // Saving the document to the database
//         await newItem.save();
//         listItems.push(newItem);

//         res.redirect(`/lists/${listName}`);
//     } catch (error) {
//         console.error('Error creating item:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };





// src/controllers/listController.js
import List from '../models/listModel.js';
import { listItems } from '../utils/items.js';
import Item from '../models/itemModel.js';
import _ from "lodash";

export const renderListPage = async (req, res) => {
    const listName = _.capitalize(req.params.listName);

    try {
        // Fetch items from the database for the specified list
        //const list = await List.findOne({ name: listName }).populate('items');

        // Find or create the list with the specified name
        const list = await List.findOneAndUpdate(
            { name: listName },
            { $setOnInsert: { name: listName } },
            { new: true, upsert: true }
        ).populate('items');


        res.render('list', {
            listTitle: listName,
            newListItems:list.items,
        });
    } catch (error) {
        console.error('Error fetching list items:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const handleListPostRequest = async (req, res) => {
    const listName = _.capitalize(req.params.listName);
    const itemName = req.body.newItem;

    try {
        // Creating a new item document
        const newItem = new Item({
            name: itemName,
        });

        // Saving the item document to the database
        await newItem.save();

        // Adding the item to the list
        const list = await List.findOneAndUpdate(
            { name: listName },
            { $push: { items: newItem._id } },
            { new: true }
        );

        listItems.push(newItem);  // Assuming listItems is a global array

        res.redirect(`/lists/${listName}`);
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).send('Internal Server Error');
    }
};
