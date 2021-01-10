import socketIOClient from 'socket.io-client';
import MainPage from './components/MainPage/mainPage';
import './App.css';
import React, { useEffect, useState } from 'react';
import SecondPage from './components/SecondPage/secondPage';
import { useSelector } from 'react-redux';
const boggle = require('pf-boggle');

const ENDPOINT = 'http://localhost:5000';

function App() {
    const [boggleArray, setBoggleArray] = useState(
        boggle.generate(4, boggle.diceSets['classic4'])
    );

    const refreshBoard = () => {
        setBoggleArray(boggle.generate(4, boggle.diceSets['classic4']));
    };

    const gameStatus = useSelector((state) => state.gameStatus);

    const [response, setResponse] = useState('');

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT, { transport: ['websocket'] });
        socket.on('FromAPI', (data) => {
            setResponse(data);
        });
    }, []);

    return (
        <div>
            {console.log(response)}
            {gameStatus === 'done' ? (
                <SecondPage boggleArray={boggleArray} />
            ) : (
                <MainPage
                    boggleArray={boggleArray}
                    refreshBoard={refreshBoard}
                />
            )}
        </div>
    );
}

export default App;
