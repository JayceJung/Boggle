import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function WordListItem(props) {
    const words = useSelector((state) => state.words);
    const listItems = words.map((word) => <li key={word}>{word}</li>);

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}
