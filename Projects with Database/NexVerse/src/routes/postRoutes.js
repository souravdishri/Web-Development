// src/routes/postRoutes.js
import express from 'express';
import { renderPostPage } from "../controllers/postController.js";

const router = express.Router();


//This version uses the router.route() method to create a chainable route handler. 
//It's a bit more concise and may be considered more elegant by some developers.
router.route("/posts/:input")
    .get(renderPostPage)
    //.post(handlePostPostRequest);

export default router;
