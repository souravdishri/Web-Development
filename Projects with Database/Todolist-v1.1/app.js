import  express  from "express";
import  bodyParser  from "body-parser";
//import _ from "lodash";
import getDate from "./src/utils/date.js";
import { connectToMongoDB,closeMongoDBConnection } from "./config/database.js";
// import { renderHomePage, handleItemPostRequest }  from "./src/controllers/mainController.js";
import mainRoutes from "./src/routes/mainRoutes.js";
import workRoutes from "./src/routes/workRoutes.js";
import aboutRoutes from "./src/routes/aboutRoutes.js";
import deleteRoutes from "./src/routes/deleteRoutes.js";
import listRoutes from "./src/routes/listRoutes.js";


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Assuming items and workItems are defined globally or in a shared module
// let items = ["Buy Food", "Cook Food", "Eat Food"];
// let workItems = [];

// Connect to MongoDB
connectToMongoDB();

// Use the item controller for the root route
//app.get("/", renderHomePage);


// Use the item controller for the POST route
//app.post("/", handleItemPostRequest);

// Use routes
app.use(mainRoutes);
app.use(workRoutes);
app.use(aboutRoutes);
app.use(deleteRoutes);
app.use(listRoutes);

//Once the Application Has Completed Its Tasks:

// Close MongoDB connection when the application is about to exit
// process.on('exit', () => {
//     closeMongoDBConnection();
//     console.log('Exiting application. MongoDB connection closed.');
// });


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