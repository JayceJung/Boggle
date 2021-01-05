import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import WordList from '../WordList/wordList';
import './secondPage.css';

export default function SecondPage() {
    return (
        <div id="mainWrap">
            <Row id="title" center="lg">
                <Col xs={3}></Col>
                <Col xs={6}>BOGGLE</Col>
                <Col xs={3} id="newGame">
                    <Button id="newGameButton">New Game</Button>
                </Col>
            </Row>
            <Row id="answers" center="lg">
                <Col xs={5}>{/* put board in */}</Col>
            </Row>
            <Row id="answers" center="lg">
                <Col xs={4}>
                    <Button id="ViewBoard">ViewBoard</Button>
                </Col>
            </Row>
        </div>
    );
}
