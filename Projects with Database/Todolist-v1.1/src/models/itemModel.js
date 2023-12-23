// src/models/itemModel.js
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true],  //(, 'Name is required')
        trim: true,
    },
    list: {
        type: String,
        // Enumerated values
        enum: {
            values: ['today', 'work'],
            // message: '{VALUE} is not supported',
        },
    },
    // other fields...
});

const Item = mongoose.model('Item', itemSchema);    //automatically it converts to prural i.e. (items)

export default Item;
