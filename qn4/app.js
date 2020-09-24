var express = require("express");
var app = express();
var studlist = require("./stud.json");

app.get("/register", function (req, res) {
  var u = req.query.un;
  var p = req.query.pw;
  var ph = req.query.pho;

  var f;

  var nameLength = u.length;
  var passwordLength = p.length;
  var phoneLength = ph.length;
  var letters = /^[A-Za-z]+$/;

  //var pattern = /^(((?=.[a-z])(?=.[A-Z]))|((?=.[a-z])(?=.[0-9]))|((?=.[A-Z])(?=.[0-9])))(?=.{6,})/;

  if (!u.match(letters) || nameLength < 5 || nameLength > 15) {
    f = 0;
    res.send("invalid user");
  } else if (!p.match(/[A-z]/) || passwordLength < 7 || passwordLength > 15) {
    res.send("Invalid password");
  } else if (isNaN(ph) || phoneLength != 10) {
    res.send("Invalid no");
  } else if (f == 1) {
    for (const i in studlist) {
      if (u == studlist[i].name) res.send("User exists already");
    }
  } else {
    res.send("registered");
  }
});

app.listen("3000", function () {
  console.log("Listening to 3000");
});
