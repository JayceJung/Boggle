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

    // const gameStatus = useSelector((state) => state.gameStatus);
    const [response, setResponse] = useState({});
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT, { transport: ['websocket'] });
        socket.on('FromAPI', (data) => {
            setResponse(data);
            setBoggleArray(data.gameBoard);
            console.log('data: ' + JSON.stringify(data));
            // console.log('data.gameBoard: ' + JSON.stringify(data.gameBoard));
            // console.log('data.gameStatus: ' + JSON.stringify(data.gameStatus));
            // console.log(
            //     'data.timerStarted: ' + JSON.stringify(data.timerStarted)
            // );
        });
    }, []);

    // SCREEN GAME STATUS
    // StartScreen => newGame;
    // MainPage => before game begins = init;
    //          => while countdown from 3 = pending;
    //          => during game = started;
    //          => during times up = pending;
    // SecondPage => done;
    
    const gameStatus = JSON.stringify(response.gameStatus);
    return (
        <div>
            {() => {
                console.log("status: " + gameStatus);
                if (gameStatus) {
                    if (gameStatus === 'newGame') {
                        return <StartScreen />;
                    } else if (gameStatus === 'done') {
                        return <SecondPage boggleArray={boggleArray} />;
                    } else {
                        <MainPage />
                    }
                } 
            }}
        </div>
    );
}

export default App;
