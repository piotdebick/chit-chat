import React, { Component } from 'react';
import MessageContainer from './components/message-components/MessageContainer'
import StartScreen from './components/startscreen-components/StartScreen'
import MenuInterface from './components/menu-interface-components/MenuInterface'
import './App.css';
//import './styles/borders.css'


class App extends Component {
  render() {
    return (
      <div className='App'>



            <MessageContainer></MessageContainer>
            <MenuInterface></MenuInterface>



          {
            //<StartScreen></StartScreen>
          }


      </div>
    );
  }
}

export default App;
