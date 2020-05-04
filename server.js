
// DEPENDENCIES
var express = require("express");
var path = require("path")

// EXPRESS CONFIGURATION
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8088;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTES
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
