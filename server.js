const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/portfolio.ejs');
});

module.exports = app;