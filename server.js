var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


app.use(express.static(process.cwd() + "/public"));


var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var router = require("./controllers/burgers_controller.js");
app.use("/", router);

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});