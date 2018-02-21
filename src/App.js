import React, { Component } from 'react';
import MessageContainer from './components/message-components/MessageContainer'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className = 'App-header'>
          <h1 className='App-title'>Chit Chat</h1>
        </div>
        <MessageContainer></MessageContainer>
      </div>
    );
  }
}

export default App;
