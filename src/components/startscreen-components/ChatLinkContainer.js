import React from 'react';
import ChatLink from './ChatLink.js'

class ChatLinkContainer extends React.Component {
  constructor (props) {
    super();
    this.state = {
      urls: ["google.com", "google.com", "google.com", "google.com", "google.com", "google.com"]
    };


  };


  render () {
    return(
      <ul>
        {
          this.state.urls.map((url, index) =>
          <li key={index}>
            <ChatLink
              className="ChatLink"
              url={url}>

              </ChatLink>
          </li>
          )
        }
      </ul>
    )
  };
}


export default ChatLinkContainer;
