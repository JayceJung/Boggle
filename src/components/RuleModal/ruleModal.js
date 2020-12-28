import React, { useState } from 'react';
import Modal from 'react-modal';
import Table from 'react-bootstrap/Table';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default function RuleModal() {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() { 
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            id="modal"
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Row id="modalTitle" center="lg">
                <Col xs={3}></Col>
                <Col xs={6}>How to Play</Col>
                <Col xs={3} id="help">
                    <Button onClick={closeModal}>close</Button>
                </Col>
            </Row>
            <Row>
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
            </Row>
            <Row>
                <Table>
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
                            <td className="modalTable">Points</td>
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
        </Modal>
    );
}
