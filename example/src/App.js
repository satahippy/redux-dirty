import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './modules/users/containers/Users';
import CreateUser from './modules/users/containers/CreateUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <p className="App-intro">
          <CreateUser/>
          <Users loadingText="Loading..."/>
        </p>
      </div>
    );
  }
}

export default App;
