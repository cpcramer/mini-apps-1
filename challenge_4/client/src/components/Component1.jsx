import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Row from 'Component2';

// Board component (1)
function Board (props) {
    return (
    <div id="table">
        <tbody>
            < Row />
            < Row />
            < Row />
            < Row />
            < Row />
            < Row />
        </tbody>
    </div>
    )
}

export default Board;