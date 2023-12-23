// src/controllers/deleteController.js
import Item from "../models/itemModel.js";
import List from "../models/listModel.js";

export const handleItemDeleteRequest = async (req, res) => {
    const itemIdToDelete = req.body.itemId;

    try {
        // Delete the item from the database
        await Item.findByIdAndDelete(itemIdToDelete);
        // Redirect back to the referring page (e.g., main or work)
        
        // Update the corresponding list(s)
        const updatedLists = await List.updateMany(
            { "items._id": itemIdToDelete },  // Find lists containing the item
            { $pull: { items: { _id: itemIdToDelete } } }  // Remove the item from those lists
        );
        // Find Lists Containing the Item: Use List.updateMany() to find lists that have the item in their items array.
        // Remove the Item from Lists: Use the $pull operator to remove the item from the items array of those lists.
        // This ensures consistency between the collections.

        res.redirect(req.get('referer'));
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).send('Internal Server Error');
    }
};

