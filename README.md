# Basics of Socket.IO

## Websocket used for Real Time Data Sending

## Socket.IO is websocket library

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

## IMPORTANT THIS

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
