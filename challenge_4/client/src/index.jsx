import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Board from './components/Board.jsx'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
        board: [ 
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                ]
        }
    }

    render () {
      return (
      <div className='board'>

        <table id="table">
            < Board />
        </table>

      </div>
      )}
  }

ReactDOM.render(< App />, document.getElementById('root'));
