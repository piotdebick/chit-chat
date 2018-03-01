/*global chrome*/
import React from 'react';
import socketIOClient from "socket.io-client";
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import '../../styles/MessageContainer.css'

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      socket: null
    };
    //blooming-citadel-29008.herokuapp.com/
  };

  componentDidMount() {
    chrome.tabs.query({active:true}, (tabs) => {
      const url = tabs[0].url;
      this.setState({
        socket: socketIOClient("https://chit-chat-api.herokuapp.com", {
          query: 'r_var='+url
        })
      });
      const { socket } = this.state;
      if(socket) {
        socket.on('connect', () => {
          console.log('Conected to server');
        });
        socket.on('disconnect', () => {
          console.log('Disconnected from server');
        });
        socket.on("newMessage", data => this.setState({ messages: [...this.state.messages, data] }));
      }
    })


  };

  render() {
    const { messages, socket } = this.state;
    return (

      <div className='MessageContainer'>
        <MessageList messages={messages}></MessageList>
        <MessageForm username={this.props.username} socket={socket}></MessageForm>
      </div>



    );
  }
}

export default MessageContainer;
