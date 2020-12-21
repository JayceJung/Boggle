import React, { useState } from 'react';

export default function WordListItem(props) {
    const listItems = props.words.map((word) => <li key={word}>{word}</li>);

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}
