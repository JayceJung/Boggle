import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default function WordListItem(props) {
    const words = useSelector((state) => state.words);
    let listItems;
    let tally = 0;
    if (props.answers) {
        const boggleAnswer = props.answers.map((answer) => answer.word);
        listItems = words.map((word) => {
            let points;
            if (boggleAnswer.includes(word)) {
                if (word.length <= 4) {
                    points = 1;
                } else if (word.length === 5) {
                    points = 2;
                } else if (word.length === 6) {
                    points = 3;
                } else if (word.length === 7) {
                    points = 5;
                } else if (word.length >= 8) {
                    points = 11;
                }

                tally += points;

                return (
                    <div>
                        <Row>
                            <Col xs={6}>
                                <li className="answerInput" key={word}>{word}</li>                     
                            </Col>
                            <Col xs={6}>
                                <p className="answerPoints">{points}</p>
                            </Col>
                        </Row>
                    </div>
                );
            } else {
                if (word.length <= 4) {
                    points = -1;
                } else if (word.length === 5) {
                    points = -2;
                } else if (word.length === 6) {
                    points = -3;
                } else if (word.length === 7) {
                    points = -5;
                } else if (word.length >= 8) {
                    points = -11;
                }

                tally += points;

                return (
                    <div>
                        <Row >
                            <Col xs={6}>
                                <li className="incorrect answerInput" key={word}>{word}</li>                     
                            </Col>
                            <Col xs={6}>
                                <p className="answerPoints">{points}</p>
                            </Col>
                        </Row>
                    </div>
                );
            }
        });
    } else {
        listItems = words.map((word) => <li key={word}>{word}</li>);
    }

    return (
        <div>
            <ul>{listItems}</ul>
            {props.answers ? <p>score: {tally}</p> : null}
        </div>
    );
}
