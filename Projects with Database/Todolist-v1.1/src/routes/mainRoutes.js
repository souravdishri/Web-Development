// src/routes/mainRoutes.js
import express from 'express';

import { renderHomePage, handleItemPostRequest } from '../controllers/mainController.js';

const router = express.Router();

router.route("/")
    .get(renderHomePage)
    .post(handleItemPostRequest);

export default router;
