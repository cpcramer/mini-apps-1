import React, {Component} from 'react';
import Row from './Row.jsx';

// Board component (1)
function Board (props) {
    return (
        <tbody id="row">
            < Row />
            < Row />
            < Row />
            < Row />
            < Row />
            < Row />
        </tbody>
    )
}

export default Board;