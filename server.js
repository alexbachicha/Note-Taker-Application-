// DEPENDENCIES
const express = require("express");
const fs = require("fs");

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server. Tells node that we are creating an "express" server
var app = express();

// PORT setup
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// What folder the browser can see
app.use("/assets", express.static("./assets"));

// ROUTER
// The below points our server to a series of "route" files. These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiroute")(app);
require("./routes/htmlroute")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
