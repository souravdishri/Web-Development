// src/controllers/editController.js

import Post from '../models/postModel.js';

export const renderEditPage = async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await Post.findById(postId);

        if (post) {
            res.render('edit', { post });
        } else {
            console.log('Post not found for id:', postId);
            // Handle case where post is not found
            res.status(404).send('Post not found');
        }
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const handleEditPostRequest = async (req, res) => {
    const postId = req.params.id;
    const updatedTitle = req.body.updatedTitle;
    const updatedPost = req.body.updatedPost;

    try {
        const post = await Post.findById(postId);

        if (post) {
            // Update the post
            post.title = updatedTitle;
            post.post = updatedPost;
            post.updatedAt = new Date();

            // Save the updated post to the database
            await post.save();

            res.redirect(`/posts/${post.title}`);
        } else {
            console.log('Post not found for id:', postId);
            // Handle case where post is not found
            res.status(404).send('Post not found');
        }
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).send('Internal Server Error');
    }
};
