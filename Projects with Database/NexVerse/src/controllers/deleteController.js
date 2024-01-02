// src/controllers/deleteController.js

import Post from "../models/postModel.js";

export const handleDeletePostRequest = async (req, res) => {
    const postId = req.params.id;

    try {
        // Using findByIdAndDelete instead of findByIdAndRemove
        const deletedPost = await Post.findByIdAndDelete(postId);

        if (!deletedPost) {
            console.log('Post not found');
            return res.status(404).send('Post not found');
        }

        console.log('Post deleted:', deletedPost);
        res.redirect('/');
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).send('Internal Server Error');
    }
};

//if you're targeting a document based on a specific criterion other than its _id, use findOneAndDelete. 
//If you have the _id and want to delete based on that, use findByIdAndDelete.