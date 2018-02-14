import React, { Component } from 'react';
import MessageContainer from './components/MessageContainer'
import './App.css';


class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>React Node ChatApp</h1>
        <MessageContainer></MessageContainer>
      </div>
    );
  }
}

export default App;
