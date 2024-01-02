import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs"; 
import _ from "lodash";
import { connectToMongoDB, closeMongoDBConnection } from "./config/database.js";

import homeRoutes from "./src/routes/homeRoutes.js";
import aboutRoutes from "./src/routes/aboutRoutes.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import composeRoutes from "./src/routes/composeRoutes.js";
import postRoutes from "./src/routes/postRoutes.js";
import deleteRoutes from "./src/routes/deleteRoutes.js";
import editRoutes from "./src/routes/editRoutes.js";


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Connect to MongoDB
connectToMongoDB();

// Use routes
app.use(homeRoutes);
app.use(aboutRoutes);
app.use(contactRoutes);
app.use(composeRoutes);
app.use(postRoutes);
app.use(deleteRoutes);
app.use(editRoutes);

// Graceful Shutdown:

// If your application is running in a long - lived process(e.g., a web server), you might want to handle graceful shutdown.
// This is especially important when deploying your application.
// Handle graceful shutdown
process.on('SIGINT', () => {
  closeMongoDBConnection();
  console.log('Received SIGINT. Closing MongoDB connection.');
  process.exit(0);
});


export default app;