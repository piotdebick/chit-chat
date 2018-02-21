import React from 'react';
import '../../styles/StartScreen.css'
import  ChatLinkContainer from './ChatLinkContainer.js'

class StartScreen extends React.Component {

  render () {
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <h1 className='Title' >Chit Chat</h1>
        <br/>
        <br/>
        <br/>


          <ChatLinkContainer ></ChatLinkContainer>

      </div>
    )
  };
}


export default StartScreen;
