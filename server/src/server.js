const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const boggle = require("pf-boggle");

const gameBoard = boggle.generate(4, boggle.diceSets["classic4"]);

let initalState = {
  gameStatus: "init",
  timerStarted: false,
  gameBoard: gameBoard,
};

// io.on('connection', client => {
//   client.emit('initState', initialState)
// });

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  console.log("New client connected");

  getApiAndEmit(socket);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response + " LOL");
};

http.listen(5000, () => {
  console.log("listening on *:5000");
});

// FE will use 'words' from BE and not from Redux
// BE:
// userData sent from FE when timer ends = [...{}]
// each {
//     userName,
//     words
// }
