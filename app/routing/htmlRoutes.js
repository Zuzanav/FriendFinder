// DEPENDENCIES ------------------------------------------------------------------
var path = require("path");


// ROUTES ------------------------------------------------------------------------
module.exports = function(app) {

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Default to home if no matching route
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
