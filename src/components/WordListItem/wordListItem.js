import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function WordListItem(props) {
    const words = useSelector((state) => state.words);
    let listItems;
    if (props.answers) {
        const boggleAnswer = props.answers.map((answer) => answer.word);
        listItems = words.map((word) => {
            if (boggleAnswer.includes(word)) {
                return <li key={word}>{word}</li>;
            } else {
                return (
                    <li className="incorrect" key={word}>
                        {word}
                    </li>
                );
            }
        });
    } else {
        listItems = words.map((word) => <li key={word}>{word}</li>);
    }

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}
