import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Circle from '/Component3';

// Row component (6 rows, 7 wide )

function Row (props) {

    return (
    <div id='row'>
        <tr>
            < Circle /> 
            < Circle /> 
            < Circle /> 
            < Circle /> 
            < Circle /> 
            < Circle /> 
            < Circle /> 
        </tr>
    </div>
    )
}

export default Row;