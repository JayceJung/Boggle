import socketIOClient from 'socket.io-client';
import MainPage from './components/MainPage/mainPage';
import StartScreen from './components/StartScreen/startScreen';
import './App.css';
import React, { useEffect, useState } from 'react';
import SecondPage from './components/SecondPage/secondPage';
import { useSelector } from 'react-redux';
const boggle = require('pf-boggle');

const ENDPOINT = 'http://localhost:5000';

function App() {
    const [boggleArray, setBoggleArray] = useState([]);

    const refreshBoard = () => {
        setBoggleArray(boggle.generate(4, boggle.diceSets['classic4']));
    };

    const gameStatus = useSelector((state) => state.gameStatus);

    const [response, setResponse] = useState('');

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT, { transport: ['websocket'] });
        socket.on('FromAPI', (data) => {
            setResponse(data);
            setBoggleArray(data.gameBoard);
            console.log("data: " + JSON.stringify(data));
            console.log("data.gameBoard: " + JSON.stringify(data.gameBoard));
            console.log("data.gameStatus: " + JSON.stringify(data.gameStatus));
            console.log("data.timerStarted: " + JSON.stringify(data.timerStarted));
        });
    }, []);
    
    return (
        <div>
            <StartScreen />
            {/* {gameStatus === 'done' ? (
                <SecondPage boggleArray={boggleArray} />
            ) : (
                <MainPage
                    boggleArray={boggleArray}
                    refreshBoard={refreshBoard}
                />
            )} */}
        </div>
    );
}

export default App;
