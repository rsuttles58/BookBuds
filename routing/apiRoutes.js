var friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var userData = req.body;
    res.json(true);

    var bookBud;
    var totalDifference = 100;

    for(var i = 0; i < userData.scores.length; i++) {
      userData.scores[i] = parseInt(userData.scores[i]);
    }

    function bookBudSelector() {
      var currentDifference = 0;
      console.log(userData);
      for (var i = 0; i < friends.length; i++) {
        for (var j = 0; j < friends[i].scores.length; j++) {
          currentDifference = currentDifference + Math.abs((userData[i].scores[j] - friends[i].scores[j]));
          console.log(currentDifference);
        }

        if (currentDifference < totalDifference) {
          bookBud = friends[i];
        }


      }

      console.log("BookBud is: " + bookBud + " .");
    }

    bookBudSelector(userData)
    // friends.push(userData);
    res.json(bookBud);
  });

};

