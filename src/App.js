import React, { Component } from 'react';
import MessageContainer from './components/message-components/MessageContainer'
import StartScreen from './components/startscreen-components/StartScreen'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>

        {
          //<StartScreen></StartScreen>
        }

          <MessageContainer></MessageContainer>
        
      </div>
    );
  }
}

export default App;
