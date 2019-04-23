var friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var userData = req.body;

    var bookBud;
    var totalDifference = 100;

    for (var i = 0; i < userData.scores.length; i++) {
      userData.scores[i] = parseInt(userData.scores[i]);
    }


    for (var i = 0; i < friends.length; i++) {
      var currentDifference = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        currentDifference = currentDifference + Math.abs(userData.scores[j] - friends[i].scores[j]);
      }

      if (currentDifference < totalDifference) {
        totalDifference = currentDifference;
        bookBud = friends[i];
      }
    }

    friends.push(userData);
    console.log(bookBud);
    res.json(bookBud);
  });

};

