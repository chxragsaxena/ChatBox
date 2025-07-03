import { Server, Socket } from "socket.io";
interface CustomSocket extends Socket {
  room?: string;
}
export function setupSocket(io: Server) {
io.on("connection",(socket)=>{
  console.log("the socket connected..", socket.id);
  socket.on("message",(data)=>{
    console.log("Server side message",data)
    socket.broadcast.emit("message",data)
  });

  socket.on("disconnect",()=>{
    console.log("A user disconnected",socket.id);
  });
});
}