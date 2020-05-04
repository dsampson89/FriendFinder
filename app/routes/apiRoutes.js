// LOAD DATA
var friendData = require("../data/friends");

// ROUTING
module.exports = function(app) {
    // API GET Requests
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
    
    app.post("/api/friends", function(req, res) {
        
      var bestMatch = {
        name: "",
        photo: "",
        freindDifference: 1000
      };

      console.log(req.body)

      var userData = req.body;
      var userScores = userData.scores;

      console.log(userScores);

      var totalDifference = 0;

      for (var i = 0; i<friendData.length; i++) {

        console.log(friendData[i]);
        totalDifference = 0;

        for (var j = 0; j< friendData[i]. scores[j]; j++) {

          totalDifference += Math.abs(parseInt(userScores[j])- parseInt(friendData[i]. scores[j]));

          if(totalDifference <= bestMatch.friendDifference) {

            bestMatch.name = friendData[i].name;
            bestMatch.photo = friendData[i].photo;
            bestMatch.friendDifference = totalDifference;

          }
        }
      }
      
      friendData.push(userData);
      
      res.json(bestMatch);

    });
  };
