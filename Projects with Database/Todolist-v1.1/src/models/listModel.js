// src/models/itemModel.js
import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true],  //(, 'Name is required')
        trim: true,
    },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
    // other fields...
});

const List = mongoose.model('List', listSchema);    //automatically it converts to prural i.e. (lists)

export default List;
