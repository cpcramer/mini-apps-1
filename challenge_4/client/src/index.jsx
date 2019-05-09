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

    clickHandler(){
        console.log('you clicked a button');
    }

    render () {
      return (
      <div className='board'>

        <table id="table">
            < Board click={this.clickHandler.bind(this)}/>
        </table>
      </div>
      )}
  }

ReactDOM.render(< App />, document.getElementById('root'));
