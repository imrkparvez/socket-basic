import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const app = express();
const server = new createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  socket.on("message", (data) => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
