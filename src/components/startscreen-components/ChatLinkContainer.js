import React from 'react';
import ChatLink from './ChatLink.js'

class ChatLinkContainer extends React.Component {
  constructor (props) {
    super();
    this.state = {
      urls: []
    };


  };


  render () {
    return(

        <ChatLink></ChatLink>

    )
  };
}


export default ChatLinkContainer;
