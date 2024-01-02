
// src/controllers/postController.js

import _ from "lodash";
import Post from "../models/postModel.js";
import { posts } from "../utils/contents.js";

export const renderPostPage = async (req, res) => {
    const rInput = _.lowerCase(req.params.input);

    // try {
    //     // Fetch items from the database for the specified list
    //     //const i = await Post.find();

    //     posts.forEach(function (i) {
    //         const sTitle = _.lowerCase(i.title);

    //         if (rInput === sTitle) {
    //             res.render('post', {
    //                 rI: i.title,
    //                 sT: i.post
    //             });
    //         }
    //     });

    // Use find instead of forEach:
    // Instead of using forEach to iterate over posts and find a match, you can use the find function to achieve the same 
    // result in a more concise manner.
    // The find function stops as soon as it finds the first matching element:

    try {
        const posts = await Post.find();
        console.log('Requested URL Parameter:', rInput);
        console.log('Posts array:', posts);

        const post = posts.find(i => _.lowerCase(i.title) === rInput);

        if (post) {
            res.render('post', {
                rI: post.title,
                sT: post.post,
                postId: post._id // Pass the post ID to identify it for deletion
            });
        } else {
            console.log('Post not found for input:', rInput);
            // Handle case where post is not found
            res.status(404).send('Post not found');
        }
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).send('Internal Server Error');
    }
};
