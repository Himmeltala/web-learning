import { Server } from "socket.io";

const server = new Server({
  cors: {
    origin: true
  }
});

server.on("connection", socket => {
  socket.on("to-server", e => {
    socket.broadcast.emit("transfer", e);
  });
});

server.listen(3000);
