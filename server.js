var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("client/build"))

app.listen(port);