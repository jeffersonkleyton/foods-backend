module.exports = (app, io) => {
  io.on("connection", (socket) => {
    console.log("socket on");
    const code = `${Math.floor(Math.random() * 99999)}`.padStart(6, "0");
    socket.emit("code", code);
    console.log("socket id", code);
  });
};
