// src/controllers/homeController.js

import Post from "../models/postModel.js";
import {homeStartingContent, posts} from "../utils/contents.js"; 

export const renderHomePage = async (req, res) => {
    try {
        // Fetch items from the database
        //const items = await Item.find({ list: 'today' });
        const posts = await Post.find();

        res.render('home', {
            hSC: homeStartingContent,
            po: posts
        });
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).send('Internal Server Error');
    }
};




// export const handleItemPostRequest = async (req, res) => {
//     const itemName = req.body.newItem;

//     try {
//         // Creating a new document
//         const newItem = new Item({
//             name: itemName,
//             list: 'today'
//             // other fields...
//         });

//         // Validate the instance asynchronously
//         await newItem.validate();

//         // Saving the document to the database
//         await newItem.save();
//         items.push(newItem);

//         res.redirect("/");

//     } catch (error) {
//         console.error('Error creating item:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };

