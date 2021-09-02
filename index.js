const express = require("express");
const consign = require("consign");
const mongoose = require("mongoose");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.mongoose = mongoose;

consign()
  .then("/src/config/middleware/socket.js")

  .then("/src/config/middleware/middlewares.js")
  .then("/src/models")
  .then("/src/api")
  .then("/src/config/rotas/rotas.js")
  .then("/src/config/db.js")
  .into(app, io);

server.listen(4000, () => {
  console.log("server on!");
});
