import React, {Component} from 'react';
import Row from './Row.jsx';

// Board component (1)
function Board (props) {
    return (
        <tbody id="row">
            < Row click={props.click}/>
            < Row click={props.click}/>
            < Row click={props.click}/>
            < Row click={props.click}/>
            < Row click={props.click}/>
            < Row click={props.click}/>
        </tbody>
    )
}

export default Board;