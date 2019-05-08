import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    render () {
      return ( 
      <div className='message-box'>
        <h1>Hello</h1>
      </div>
      )}
  }

ReactDOM.render(< App />, document.getElementById('root'));


