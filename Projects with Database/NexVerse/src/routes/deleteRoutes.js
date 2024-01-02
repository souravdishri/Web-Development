// src/routes/deleteRoutes.js
import express from 'express';
import { handleDeletePostRequest } from '../controllers/deleteController.js';

const router = express.Router();

router.route("/delete/:id")
    .get(handleDeletePostRequest);

export default router;
