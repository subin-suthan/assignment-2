var express = require("express");
var app = express();
var hot = [];
var cit = [];
var x = " ";
var y = " ";
var z = " ";
var w = " ";

var hotels = require("./hotel.json");

app.get("/gethotellist", function (req, res) {
  for (const i in hotels) {
    hot.push(hotels[i].name);
  }
  hot.forEach((j) => {
    x += "<br/><br/>" + j;
  });
  res.send(x);
});

app.get("/gethotelbycity", function (req, res) {
  key = req.query.city;
  search = [];
  hotels.forEach((element) => {
    if (key == element.city) {
      search.push(element.name);
    }
  });

  search.forEach((i) => {
    w += " <br/><br/>" + i;
  });
  res.send(w);
});

app.get("/type", function (req, res) {
  keyword = req.query.srch;
  var searchType = [];
  hotels.forEach((element) => {
    if (keyword == element.type) {
      searchType.push(element.name);
    }
  });

  searchType.forEach((i) => {
    y += " <br/><br/>" + i;
  });
  res.send(y);
});

app.get("/cuisine", function (req, res) {
  k = req.query.cus;
  var searchcus = [];
  hotels.forEach((element) => {
    for (const key in element.cuisine) {
      if (k == element.cuisine[key]) {
        searchcus.push(element.name);
      }
    }
    searchcus.forEach((i) => {
      z += " <br/><br/>" + i;
    });
    res.send(z);
  });
  res.send(searchcus);
});
// app.get("/search", function (req, res) {
//   keyword = req.query.srch;
//   for (const key in bookList) {
//     if (keyword == bookList[key].author) {
//       match.push(bookList[key]);
//     }
//   }
//   res.send(match);
// });

// app.get("/login/:username/:city", function (req, res) {
//   var uname = req.params.username;
//   var ucity = req.params.city;
//   res.send(`welcome ${uname} from ${ucity}`);
// });

// app.get("/login/:username/:city", function (req, res) {
//   var params = req.params;
//   res.send(params);
// });

// app.get("/user/:username/:city", function (req, res) {
//   var params = req.params;
//   res.send(params);
// });

// app.get("/home", function (req, res) {
//   res.send("welcome to expres");
// });

// app.get("/register", function (req, res) {
//   var name = req.query.studname;
//   var id = req.query.studid;

//   res.send({ stname: name, studid: id });
// });

app.listen("5000", function () {
  console.log("listening to port 5000");
});
