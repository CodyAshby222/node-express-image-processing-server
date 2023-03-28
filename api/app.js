const express = require("express");
const path = require("path");

const pathToIndex = path.resolve(__dirname, "../client/index.html");

app.use("/*", (request, response) => {
  response.sendFile(pathToIndex);
});

const app = express();

module.exports = app;
