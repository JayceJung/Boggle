import MainPage from './components/MainPage/mainPage';
import './App.css';
import React, { useEffect, useState } from 'react';
import SecondPage from './components/SecondPage/secondPage';
import { useSelector } from 'react-redux';
const boggle = require('pf-boggle');

function App() {
    const [boggleArray, setBoggleArray] = useState(
        boggle.generate(4, boggle.diceSets['classic4'])
    );

    const refreshBoard = () => {
        setBoggleArray(boggle.generate(4, boggle.diceSets['classic4']));
    };

    const gameStatus = useSelector((state) => state.gameStatus);

    return (
        <div>
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
