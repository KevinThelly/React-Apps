import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


    state={
      username:"",
      email:""
    }

  handleNameOnChange=(event) =>{
    this.setState=()=>{
      name=event.target.value;
    }
  }

  handleEmailOnChange=(event)=>{
    this.setState=()=>{
      email=event.target.value;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul class="noBullet">
                        <li>
                        <label htmlFor="username">name</label>
                        <input type="text" class="inputFields" id="username" name="username" placeholder="Username" onChange={this.handleNameOnChange} required/>
                        </li>
                        <li>
                        <label htmlFor="email">Email</label>
                        <input type="text" class="inputFields" id="email" name="email" placeholder="Email" onChange={this.handleEmailOnChange} required/>
                        </li>
                </ul>

        </header>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);