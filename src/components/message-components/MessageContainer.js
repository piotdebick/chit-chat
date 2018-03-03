/*global chrome*/
import React from 'react';
import socketIOClient from "socket.io-client";
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import '../../styles/MessageContainer.css'

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    //set socket to null when building for chrome extension
    this.state = {
      messages: [],
      socket: socketIOClient("https://chit-chat-api.herokuapp.com")
    };
  };

  // ---------uncomment for extension build-------------------------------------
  // componentDidMount() {
  //   chrome.tabs.query({
  //     active: true
  //   }, (tabs) => {
  //     const url = tabs[0].url;
  //     console.log('hello!')
  //     this.setState({
  //       socket: socketIOClient("https://chit-chat-api.herokuapp.com", {
  //         query: 'r_var=' + url
  //       })
  //     }, () => {
  //       const {socket} = this.state;
  //       console.log('render pls')
  //       socket.on('connect', () => {
  //         console.log('Connected to server');
  //       });
  //       socket.on('disconnect', () => {
  //         console.log('Disconnected from server');
  //       });
  //       socket.on("newMessage", data => this.setState({
  //         messages: [
  //           ...this.state.messages,
  //           data
  //         ]
  //       }));
  //     });
  //   })
  // }
  // ---------------------------------------------------------------------------

  componentDidMount() {
    const {socket} = this.state;
    if (socket) {
      socket.on('connect', () => {
        console.log('Conected to server');
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
    const {messages, socket} = this.state;
    return (
      <div className='MessageContainer'>
        <MessageList messages={messages}></MessageList>
        <MessageForm username={this.props.username} socket={socket}></MessageForm>
      </div>
  );
  }
}

export default MessageContainer;
