var friendsData = require("../data/friends.js");

// ===============================================================================

// ROUTES --------------------------------------------------------------------
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

    var match = {
        name: "", 
        photo: "",
        ansDiff: 1000,
    };

    console.log (req.body);

    var userData = req.body;
    var userAns = userData.answers;

  });

}; // end of module.exports 

// ===============================================================================
