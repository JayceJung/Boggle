import MainPage from './components/MainPage/mainPage';
import './App.css';
import React, { useEffect, useState } from 'react';
import SecondPage from './components/SecondPage/secondPage';

const boggle = require('pf-boggle');

function App() {
    const [boggleArray, setBoggleArray] = useState(boggle.generate(4, boggle.diceSets['classic4']));

    const refreshBoard = () => {
        setBoggleArray(boggle.generate(4, boggle.diceSets['classic4']));
    }
    return (
       <div>
         {/* <MainPage boggleArray={boggleArray} refreshBoard={refreshBoard}/> */}
         <SecondPage boggleArray={boggleArray}/>
       </div>
      );
    }

export default App;
