// LOAD DATA
var friendData = require("../data/friends");

// ROUTING
module.exports = function(app) {
    // API GET Requests
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
    
    app.post("/api/friends", function(req, res) {
        fiendData.push(req.body);
        res.json(true);
      
      
    });
  };
