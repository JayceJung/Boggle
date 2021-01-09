import React from 'react';
import Table from 'react-bootstrap/esm/Table';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './ruleModal.css';

export default function RuleModal() {
    return (
        <div>
            <Row center="lg">
                <Col xs={3}></Col>
                <Col xs={6} id="modalTitle">
                    How to Play
                </Col>
                <Col xs={3}></Col>
            </Row>
            <Row id="rule">
                - Search the letters for words of 3 or more letters
                <br />
                - Words can be formed from letters connecting horizontally,
                vertically, or diagonally to the left, right or up-and-down
                <br />
                - No letter may be used more than once within a single word
                <br />
                - Any word (noun, verb, adjective, adverb, etc.), plural of,
                form of, or tense is accepmodaltable
                <br />- Proper nouns (Toronto, John, Japan) are not allowed
                <br />- Points are gained/lost based on if a word is/isn't valid
            </Row>
            <Row center="lg">
                <Table id="pointTable">
                    <tbody>
                        <tr>
                            <td className="modalTable"># of Letters</td>
                            <td className="modalTable">3</td>
                            <td className="modalTable">4</td>
                            <td className="modalTable">5</td>
                            <td className="modalTable">6</td>
                            <td className="modalTable">7</td>
                            <td className="modalTable">8 or more</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="modalTable">Points (+/-)</td>
                            <td className="modalTable">1</td>
                            <td className="modalTable">1</td>
                            <td className="modalTable">2</td>
                            <td className="modalTable">3</td>
                            <td className="modalTable">5</td>
                            <td className="modalTable">11</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </div>
    );
}
