// src/routes/aboutRoutes.js
import express from 'express';
import { renderAboutPage } from '../controllers/aboutController.js';

const router = express.Router();

router.get('/about', renderAboutPage);

export default router;
