import React from 'react';
import socketIOClient from "socket.io-client";
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import '../../styles/MessageContainer.css'

class MessageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      socket: socketIOClient("https://blooming-citadel-29008.herokuapp.com/")
    };
  };

  componentDidMount() {
    const { socket } = this.state;
    socket.on('connect', () => {
      console.log('Conected to server');
    });
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
    socket.on("newMessage", data => this.setState({ messages: [...this.state.messages, data] }));

  };

  render() {
    const { messages, socket } = this.state;
    return (
      <div className='MessageContainer'>
        <MessageList messages={messages}></MessageList>
        <MessageForm socket={socket}></MessageForm>
      </div>
    );
  }
}

export default MessageContainer;