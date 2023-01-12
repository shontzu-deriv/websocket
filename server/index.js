const WebSocket = require("ws");

// this line of code will start the ws server
const wss = new WebSocket.Server({
  port: 8082,
});

wss.on("connection", (ws) => {
  console.log("new client connected");

  ws.on("message", (data) => {
    console.log(JSON.parse(data));
});

  ws.on("close", () => {
    console.log("client disconnected");
  });
});
