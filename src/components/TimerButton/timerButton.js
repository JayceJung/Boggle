import React, { useEffect, useState } from 'react';
import CountdownTimer from "react-component-countdown-timer";
import './timerButton.css'

export default function TimerButton(props) {

    const [animationStart, setAnimationStart] = useState(false);
    const [buttonText, setButtonText] = useState("3");

    const updateButtonText = () => {
        if (buttonText=='3') {
            setButtonText('2');
        } else if (buttonText=='2'){
            setButtonText('1');
        } else if (buttonText == "1") {
            setButtonText("Go!");
        } else if ( buttonText == "Go!") {
            setAnimationStart(false);
            props.startAction();
        }
    }
    useEffect(() => {
        if(animationStart==true) {
            let startAnimation = setInterval(updateButtonText, 1000);
            return () => clearInterval(startAnimation);
        }
    });
    if (props.gameStatus=='started') {
        return (
            <div id="timerButton">
                <CountdownTimer count={5} backgroundColor={'#37A649'} border size={40} onEnd={props.stopAction}/>
            </div>
        )
    } else if (!animationStart && props.gameStatus=='init') {
        return (
            <div id="timerButton" onClick={() => {
                setAnimationStart(true);
            }}>
                Start Game!
            </div>
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
