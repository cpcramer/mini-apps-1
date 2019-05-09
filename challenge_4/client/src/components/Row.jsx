import React, {Component} from 'react';
import Circle from './Circle.jsx';

// Row component (6 rows, 7 wide )

function Row (props) {

    return (
        <tr id='circle'>
            < Circle /> 
            < Circle /> 
            < Circle /> 
            < Circle /> 
            < Circle /> 
            < Circle /> 
            < Circle /> 
        </tr>
    )
}

export default Row;