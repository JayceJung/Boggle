import React from 'react';
import socketIOClient from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { newGameCode } from '../../actions';

const ENDPOINT = 'http://localhost:5000';

export default function StartScreen() {
    const dispatch = useDispatch();

    const gameCodeInput = document.getElementById('gameCodeInput');
    const gameCodeDisplay = document.getElementById('gameCodeDisplay');
    const socket = socketIOClient(ENDPOINT, { transport: ['websocket'] });

    const newGame = () => {
        socket.emit('newGame');
    };

    const joinGame = () => {
        socket.emit('joinGame', gameCodeInput.value);
    };

    const handleGameCode = (gameCode) => {
        gameCodeDisplay.innerText = gameCode;
        socket.emit('joinGame', gameCode);
        dispatch(newGameCode(gameCode));
    };

    socket.on('gameCode', handleGameCode);

    socket.on('checkHost', (num) =>{
        console.log("checkHost reached");
        socket.emit('sendHostNum', num);
    });
    
    return (
        <div>
            <button type="submit" id="newGameBtn" onClick={newGame}>
                Create New Game
            </button>
            <div>
                <input type="text" id="gameCodeInput" placeholder="game code" />
            </div>
            <button type="submit" id="joinGameBtn" onClick={joinGame}>
                Join Game
            </button>
            <div>
                Your game code is: <span id="gameCodeDisplay"></span>
            </div>
        </div>
    );
}
