// src/routes/aboutRoutes.js
import express from 'express';

import { renderComposePage, handleComposePostRequest } from '../controllers/composeController.js';

const router = express.Router();

router.route("/compose")
    .get(renderComposePage)
    .post(handleComposePostRequest);

export default router;
