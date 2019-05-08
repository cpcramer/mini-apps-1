// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentPage: 0};
    }

    handleClick () {
        console.log('handle click is working');
        if(this.state.currentPage === 2){
            this.setState({currentPage: 0});
        } else {
            this.setState({currentPage: this.state.currentPage + 1});
        }
    }

    render () {
        let currentPage = this.state.currentPage;
        let myForm;
        
        if (currentPage === 0){
            myForm = < FormOne click={this.handleClick.bind(this)}/>
        } else if(currentPage === 1){
            myForm = < FormTwo click={this.handleClick.bind(this)}/>
        } else if(currentPage === 2) {
            myForm = < FormThree click={this.handleClick.bind(this)}/>
        }

        return ( 

        <div className='message-box'>
            <h1>Account creation</h1>
            {/* < myForm currentPage={currentPage}/> */}
                { myForm }
        </div>
    
      )};
}

// Form 1 -> collects name, email, and password for account creation.
function FormOne (props) {
    console.log(props);
    return (
        
    <div className='formOne'>

      <h1>Form One - Account Creation</h1>

      <form >
        Name: <input type = "text" name = "first_name" />
        <br />
        Email: <input type = "text" name = "last_name" />
        <br />
        Password: <input type = "text" name = "last_name" />
      </form>
      <button id="checkout" onClick={ props.click } > Checkout </button>

    </div>

    )
}

// Form 2 -> collects ship to address (line 1, line 2, city, state, zip code) and phone number.

function FormTwo (props) {
    return (

    <div className='formTwo'>
      <h1>Form Two</h1> 
      <form >
        Address: <input type = "text" name = "first_name" />
        <br />
        Phone Number: <input type = "text" name = "last_name" />
      </form>
      <button id="checkout" onClick={ props.click } > Checkout </button>

    </div>
    )
}

// Form 3 -> collects credit card #, expiry date, CVV, and billing zip code.

function FormThree (props) {
    return (
    <div className='formThree'>
      <h1>Form Three</h1> 
        <form >
            Credit card #: <input type = "text" name = "first_name" />
        </form>
        <button id="checkout" onClick={ props.click } > Checkout </button>
    </div>
    )
}

ReactDOM.render(< App />, document.getElementById('root'));

