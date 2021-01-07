import React, { useEffect, useState } from 'react';
import CountdownTimer from 'react-component-countdown-timer';
import './timerButton.css';
import { useSelector, useDispatch } from 'react-redux';
import { startGame, endGame, initGame, pendingGame } from '../../actions';

export default function TimerButton(props) {
    //redux stuff
    const gameStatus = useSelector((state) => state.gameStatus);
    const dispatch = useDispatch();

    const [animationStart, setAnimationStart] = useState(false);
    const [buttonText, setButtonText] = useState('3');
    const [timerStatus, setTimerStatus] = useState(false);

    const updateButtonText = () => {
        if (buttonText == '3') {
            setButtonText('2');
        } else if (buttonText == '2') {
            setButtonText('1');
        } else if (buttonText == '1') {
            setButtonText('Go!');
        } else if (buttonText == 'Go!') {
            setAnimationStart(false);
            dispatch(startGame());
            props.refreshBoard();
        }
    };
    useEffect(() => {
        if (animationStart == true) {
            let startAnimation = setInterval(updateButtonText, 1000);
            return () => clearInterval(startAnimation);
        }
    });
    if (gameStatus == 'started') {
        return (
            <div id="timerButton">
                <CountdownTimer
                    count={3}
                    backgroundColor={'#37A649'}
                    border
                    hideHours
                    hideDay
                    size={40}
                    onEnd={() => {
                        if (gameStatus != 'done') {
                            dispatch(pendingGame())
                            setTimeout(() => {
                                dispatch(endGame())
                              }, 3000);
                        }
                    }}
                />
            </div>
        );
    } else if (!animationStart && gameStatus == 'init') {
        return (
            <div
                id="timerButton"
                onClick={() => {
                    setAnimationStart(true);
                }}
            >
                Start Game!
            </div>
        );
    } else if (gameStatus === 'pending') {
        return <div id="timerButton">Time's Up!</div>;
    } else {
        return <div id="timerButton">{buttonText}</div>;
    }
}
