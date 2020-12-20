import React, { useEffect } from "react";
import Board from "../Board/board";
import { Grid, Row, Col } from "react-flexbox-grid";
import './mainPage.css';

const boggle = require("pf-boggle");

export default function MainPage() {
  const boggleArray = boggle.generate(4, boggle.diceSets["classic4"]);

  useEffect(() => {
    const boggleAnswer = boggle.solve(boggleArray);
    console.log("boggle Array:", boggleArray);
    console.log("boggle Answers: ", boggleAnswer);
  });

  return (
    <div id="mainWrap">
      <Row id="title" center="lg">
        BOGGLE
      </Row>
      <Row id="gameWrap">
        <Col xs={8}>
          <Board array={boggleArray} />
        </Col>
        <Col xs={4}>chat</Col>
      </Row>
    </div>
  );
}
