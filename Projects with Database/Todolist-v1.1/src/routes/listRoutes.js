// src/routes/listRoutes.js
import express from 'express';
import { renderListPage, handleListPostRequest } from '../controllers/listController.js';

const router = express.Router();
//Both versions are similar in functionality.

//This is a more straightforward and traditional way of defining separate routes for GET and POST requests.
// router.get('/lists/:listName', renderListPage);
// router.post('/lists/:listName', handleListPostRequest);

//This version uses the router.route() method to create a chainable route handler. 
//It's a bit more concise and may be considered more elegant by some developers.
router.route("/lists/:listName")
    .get(renderListPage)
    .post(handleListPostRequest);

export default router;
