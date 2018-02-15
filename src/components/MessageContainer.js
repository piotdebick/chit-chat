import React from 'react';
import socketIOClient from "socket.io-client";
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import '../styles/MessageContainer.css'

class MessageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      socket: socketIOClient("http://localhost:3001")
    };
  };
  componentDidMount() {
    const { socket } = this.state;
    socket.on('connect', () => {
      console.log('Connected to server');
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
