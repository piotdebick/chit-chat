import React from 'react';
import '../../styles/StartScreen.css'
import  ChatLinkContainer from './ChatLinkContainer.js'
//import '../../styles/borders.css'

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

        <div>
          <ChatLinkContainer></ChatLinkContainer>
        </div>
      </div>
    )
  };
}


export default StartScreen;
