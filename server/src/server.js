import { makeid } from './utils';

const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const boggle = require("pf-boggle");
const state = {};
const clientRooms = {};
let initialState;

// io.on('connection', client => {
//   client.emit('initState', initialState)
// });

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  const gameBoard = boggle.generate(4, boggle.diceSets["classic4"]);
  
  initialState = {
    gameStatus: "init",
    timerStarted: false,
    gameBoard: gameBoard,
  };

  console.log("New client connected");

  getApiAndEmit(socket, initialState);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
  socket.on("newGame", () => {
    let roomName = makeid(5);
    clientRooms[socket.id] = roomName;
    socket.emit('gameCode', roomName);

    socket.join(roomName);
    socket.number = 1;
    socket.emit('init', 1);
  })
});

const getApiAndEmit = (socket, initState) => {
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", initState);
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
