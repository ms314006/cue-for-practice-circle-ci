const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.get(/.js/, function(req, res) {
  res.sendFile(`${__dirname}/${req.path}`);
});

app.listen(port);
