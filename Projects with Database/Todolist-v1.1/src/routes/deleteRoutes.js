// src/routes/deleteRoutes.js
import express from 'express';
import { handleItemDeleteRequest } from '../controllers/deleteController.js';

const router = express.Router();

router.post('/delete', handleItemDeleteRequest);

export default router;
