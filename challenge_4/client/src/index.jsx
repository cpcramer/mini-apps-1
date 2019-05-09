import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Board from './components/Component1.jsx'
import Row from './components/Component2.jsx'
import Circle from './components/Component3.jsx'


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

        <table>
            < Board />
        </table>

      </div>
      )}
  }

ReactDOM.render(< App />, document.getElementById('root'));
