// src/routes/aboutRoutes.js
import express from 'express';

import { renderAboutPage } from '../controllers/aboutController.js';

const router = express.Router();

router.route("/about")
    .get(renderAboutPage)
    // .post(handleItemPostRequest);

export default router;
