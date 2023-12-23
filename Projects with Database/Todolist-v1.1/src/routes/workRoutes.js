// src/routes/workRoutes.js
import express from 'express';

import { renderWorkPage, handleWorkPostRequest } from '../controllers/workController.js';

const router = express.Router();

// Express's Case-Insensitive Routing:
// By default, Express routes are case -insensitive, meaning they match URLs regardless of letter case.
// This behavior is intended to make routing more flexible and user - friendly, 
// as users might not always type URLs with consistent capitalization.

router.route("/work")
    .get(renderWorkPage)
    .post(handleWorkPostRequest);

export default router;






// Router - Level Configuration(Optional):

// If you want to enforce case -sensitive routing for specific routes or the entire application, 
// you can do so using the router.route() method's options:

// Case-sensitive route:
// router.route("/Work", { sensitive: true })
//     .get(renderWorkPage)
//     .post(handleWorkPostRequest);

// Case-sensitive for all routes within a router:
// const router = express.Router({ caseSensitive: true });
