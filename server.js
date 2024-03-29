const express = require("express");
const app = express();
const router = require("./config/router");
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

//require mongoose
require("./config/mongoose");
//require router
app.use(router);

app.listen(7000);
