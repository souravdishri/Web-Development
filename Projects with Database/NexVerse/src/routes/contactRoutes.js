// src/routes/contactRoutes.js
import express from 'express';

import { renderContactPage } from '../controllers/contactController.js';

const router = express.Router();

router.route("/contact")
    .get(renderContactPage)
// .post(handleItemPostRequest);

export default router;
