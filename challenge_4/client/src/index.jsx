import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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
        axios.post('http://localhost:3000/test', {name: 'dog', color: 'purple', age: 3 })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
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
