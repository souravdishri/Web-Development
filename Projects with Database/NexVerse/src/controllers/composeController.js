// src/controllers/composeController.js

import Post from '../models/postModel.js';
import { posts } from "../utils/contents.js";

export const renderComposePage = async (req, res) => {
    try {
        // Fetch items from the database
        //const items = await Item.find({ list: 'today' });

        res.render('compose');
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const handleComposePostRequest = async (req, res) => {
    const titleName = req.body.composeTitle;
    const postName = req.body.composePost;

    try {
        // Creating a new document
        const newPost = new Post({
            title: titleName,
            post: postName,
            // other fields...
        });
        // Validate the instance asynchronously
        await newPost.validate();
        // Saving the document to the database
        await newPost.save();
        posts.push(newPost);

        res.redirect("/");
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).send('Internal Server Error');
    }
};
















// app.post('/compose', function (req, res) {
//     const post = {
//         cT: req.body.composeTitle,   //also can be nested: {key:{key:value}}
//         cP: req.body.composePost
//     }

//     posts.push(post);
//     res.redirect('/');
//     // let cT = req.body.composeTitle;
//     // let cP = req.body.composePost;

// });