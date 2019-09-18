// ==============================================================================

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTES

// shows our server to the required route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================

// START SERVER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
