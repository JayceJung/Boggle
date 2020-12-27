import React, { useEffect, useState } from 'react';
import CountdownTimer from "react-component-countdown-timer";

export default function TimerButton(props) {

    const [animationStart, setAnimationStart] = useState(false);
    const [buttonText, setButtonText] = useState("4");
    let initialNumber = 4;

    const updateButtonText = () => {
        if ( buttonText == "1") {
            console.log("GO!");
            setButtonText("Go!");
        } else if ( buttonText == "Go!") {
            console.log("done")
            setAnimationStart(false);
            props.startAction();
        } else {
            initialNumber--;
            setButtonText(initialNumber.toString());
            console.log("It should say: ", buttonText);
        }
    }
    useEffect(() => {
        if(animationStart==true) {
            let startAnimation = setInterval(updateButtonText, 1000);
            return () => clearInterval(startAnimation);
        }
    });
    console.log("Game Status: ", props.gameStatus);
    if (props.gameStatus=='started') {
        return (
            <CountdownTimer count={5} border onEnd={props.stopAction}/>
        )
    } else if (!animationStart && props.gameStatus=='init') {
        return (
            <button id="timerButton" onClick={() => {
                setAnimationStart(true);
            }}>
                Start Game!
            </button>
        )
    } else if (props.gameStatus=='done') {
        return (
            <div id="timerButton">Time's Up!</div>
        )
    } else {
        return (
            <div id="timerButton">{buttonText}</div>
        )
    }
}
