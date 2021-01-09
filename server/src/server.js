const http = require('http').createServer();
const io = require('socket.io-client')(http);
const boggle = require('pf-boggle');
const gameBoard = boggle.generate(4, boggle.diceSets['classic4']);


let initalState = {
  gameStatus: 'init',
  timerStarted: false,
  gameBoard: gameBoard
}

// io.on('connection', client => {
//   client.emit('initState', initialState)
// });

http.listen(5000, () => {
  console.log('listening on *:5000');
});

io.on('connection', socket => {
  let counter = 0;
  setInterval(() => {
    socket.emit('hello', ++counter);
  }, 1000);
});


// FE will use 'words' from BE and not from Redux
// BE:
// userData sent from FE when timer ends = [...{}]
// each {
//     userName,
//     words
// }