// src/routes/editRoutes.js

import express from 'express';
import { renderEditPage, handleEditPostRequest } from '../controllers/editController.js';

const router = express.Router();

router.route('/edit/:id')
    .get(renderEditPage)            // Route to render the edit page
    .post(handleEditPostRequest);   // Route to handle the edit post request  

export default router;
