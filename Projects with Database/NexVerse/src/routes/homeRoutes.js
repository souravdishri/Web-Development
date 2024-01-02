// src/routes/homeRoutes.js
import express from 'express';

import { renderHomePage } from '../controllers/homeController.js';

const router = express.Router();

router.route("/")
    .get(renderHomePage)
    //.post(handleItemPostRequest);

export default router;
