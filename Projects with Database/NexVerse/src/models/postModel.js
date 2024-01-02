// models/postModel.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true],  //(, 'Title is required')
        trim: true,
    },
    post: {
        type: String,
        required: [true],  //(, 'Post is required')
        trim: true,
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: null 
    },
    // You can add other fields as needed
});

const Post = mongoose.model('Post', postSchema);

export default Post;
