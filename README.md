# Basics of Socket.IO

**Websocket used for Real Time Data Sending**

**Socket.IO is websocket library**

Websockets ==> HTTP / FTP / SMTP

- Websockets are used for duplex communication, where both client and server can send and receive response and request.
- Every Socket has an unique id

**IO**

- IO refers to the server/circuit
- IO is a collection of socket/client

**Socket**

- Socket refers to a single client

**Event Trigger**

- Emit = trigger an event
- ON = Listener
- Broadcast =
- To = trigger event for particular room
- Join = to join people/socket on room

**IMPORTANT CODES**

```
io.emit(Event, "Hello")

Socket.on(Event, ()=> {

})

Socket.emit(btn, 4);
Socket.on(btn, n => {

})

Socket.broadcast.emit()

Socket.to(roomId).emit();

Socket.join(roomName);
```

## Setting up Socket.IO

**For Server**

```
mkdir server
npm init -y
npm i express socket.io cors
npm i --save-dev nodemon
```

**For Client**

```
npm create vite@latest
npm i
npm run dev
npm i socket.io-client
```

- MaterialUI for Frontend

```
npm install @mui/material @emotion/react @emotion/styled
```

**Create and Run a Socket Sever**

```
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
  console.log("User connected");
  console.log(`Id: ${socket.id}`);
});

server.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
```

- credentials: true => helps to send headers like cookies
- change app.listen() to server.listen() to connect frotend with backend

**Cleanup Client folder**
**Connect Frontend with Server**

```
import { io } from "socket.io-client";
const App = () => {
  const socket = io("http://localhost:3000");
  return <div></div>;
};
export default App;
```

- Normally we won't use emit, we will add listener and emit from frontend

**Disconnect a user**

```
socket.on("disconnect", () => {
    console.log(`User disconnected ${socket.id}`);
  });
```

- When return keyword in useEffect() will active, the server should be closed.

```
return () => {
      socket.disconnect();
    };
```

- use useMemo() hook to prevent repetative renderation of socket

```
const socket = useMemo(() => io("http://localhost:3000"), []);
```

- if you want to send a message for everyone including you like sending message to a group use `.emit`
- if you want to send a message to everyone excluding you use `.broadcast.emit`