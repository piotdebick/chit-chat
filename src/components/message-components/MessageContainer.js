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
      userColor: this.getRandomColor(),
      socket: socketIOClient("https://chit-chat-api.herokuapp.com")
    };
  };

  getRandomColor() {
    let color, letters = '0123456789ABCDEF'.split('')
      color = '#'
      color += letters[Math.round(Math.random() * 5 )]
      for (var i = 0; i < 5; i++) {
          color += letters[Math.round(Math.random() * 15 )]
      }
      return color
  }

  componentDidMount() {
    const {socket} = this.state;
    if (socket) {
      socket.on('connect', () => {
        console.log('Connected to server');
      });
      socket.on('disconnect', () => {
        console.log('Disconnected from server');
      });
      socket.on("newMessage", data => this.setState({
        messages: [
          ...this.state.messages,
          data
        ]
      }));
    }
  }

  render() {
    const {messages, socket, userColor} = this.state;
    return (
      <div className='MessageContainer'>
        <MessageList messages={messages}></MessageList>
        <MessageForm userColor={userColor} username={this.props.username} socket={socket}></MessageForm>
      </div>
  );
  }
}

export default MessageContainer;
