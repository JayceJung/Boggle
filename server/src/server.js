// import { makeid } from './utils';

const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const boggle = require("pf-boggle");

const clientRooms = {};
const gameState = {
  serverGameStatus: "init",
};

const users = [];

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  const gameBoard = boggle.generate(4, boggle.diceSets["classic4"]);

  initialState = {
    gameStatus: "newGame",
    timerStarted: false,
    gameBoard: gameBoard,
  };

  getApiAndEmit(socket, initialState);
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("newGame", () => {
    let roomName = makeid(5);
    console.log("new game generated");
    console.log("room name: " + roomName);
    clientRooms[socket.id] = roomName;
    socket.emit("gameCode", roomName);

    socket.join(roomName);

    socket.number = 1;
    socket.emit("sendHostNumToMain", 1);
  });

  // socket.on("sendHostNum", (number) => {
  //   console.log("sendHostNum reached " + number);
  //   io.sockets.emit("sendHostNumToMain", number);
  // })

  socket.on("joinGame", (gameCode) => {
    socket.number = users.length++;
    users.push(socket);
    const room = io.sockets.adapter.rooms[gameCode];
    let allUsers;
    if (room) {
      allUsers = room.sockets;
    }
    let numClients = 0;
    if (allUsers) {
      numClients = Object.keys(allUsers).length;
    }
    if (numClients === 0) {
      socket.emit("unknownGame");
      return;
    } else if (numClients > 4) {
      socket.emit("tooManyPlayers");
      return;
    }

    clientRooms[socket.id] = gameCode;
    socket.join(gameCode);
    clientRooms.emit("init", 2);
  });
});

const getApiAndEmit = (socket, initState) => {
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", initState);
};

const makeid = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
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
