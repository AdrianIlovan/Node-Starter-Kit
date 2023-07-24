const express = require("express");
const app = express();

app.get("/", function (req, res) {
    console.log(req);
    res.send("Yay Node!");
});

app.get("/chocolate", function (req, res){
    let amount = req.query.amount;
    res.send(`Chocolate is good! ${amount}`);
});

app.get("/codeyourfuture", function (req, res) {
    res.send("Best Coding Experience!");
});

app.get("/", function (req, res) {
  let searchQuery = req.query.search;
  res.send("Hello World! You searched for " + searchQuery);
});

app.get("/multiply" , function(req, res) {
    value1 = req.query.value1;
    value2 = req. query.value2;
    res.send(`result=${value1*value2}  `)
})

app.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept request");
});
