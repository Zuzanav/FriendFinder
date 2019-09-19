var friendsData = require("../data/friends.js");

// ===============================================================================

// ROUTES --------------------------------------------------------------------
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

    // creates an array for potential gym buddy match 
    var match = {
        name: "", 
        photo: "",
        ansDifference: 1000,
    };

    console.log (req.body);

    // variable to collect the user data 
    var userData = req.body;

    // variable to collect user answers 
    var userAns = userData.answers;

    // variable to help compare score between user and gym buddies stored in data
    var totalDiff = 0;

    // loop through each current gym buddy....
    for(var i = 0; i < friendsData.length; i++) {
        var totalDiff = 0;

        // ... and loop through each gym buddy's answers 
        for (var j = 0; j < friendsData[i].answers[j]; j++) {
            totalDiff += Math.abs(parseInt(userAns[j]) - parseInt(friendsData[i].answers[j]));
            
            // then compare to see if the answer difference between gym buddy 
            // and user is different and by how much to set up the perfect match
            if (totalDiff <= match.ansDifference) {
                match.name = friendsData[i].name;
                match.photo = friendsData[i].photo;
                match.ansDifference = totalDiff;
            }
        } // end inner for loop
    } // end outer for loop

    // this saves the user's data
    friendsData.push(userData);

    res.json(match);

  });

}; // end of module.exports 

// ===============================================================================
