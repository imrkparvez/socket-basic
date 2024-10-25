import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const server = new createServer(app);
const io = new Server(server);
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log("User connected");
  console.log(`Id: ${socket.id}`);
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
