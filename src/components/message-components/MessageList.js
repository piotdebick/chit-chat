import React from 'react';
import Message from './Message';
import '../../styles/MessageList.css';

class MessageList extends React.Component {
  componentDidMount(){
    this.scrollToBottom();
  };
  componentDidUpdate() {
    this.scrollToBottom();
  };
  scrollToBottom() {
    this.bottom.scrollIntoView({behavior: 'smooth'});
  };
  render() {

    return (
      <ul className='MessageList-box'>
        {
          this.props.messages.map((message, index) =>
            <li className='MessageList-item' key={index}>
              <Message
                userColor={message.userColor}
                from={message.from}
                message={message.text}
                timeStamp={message.createdAt}></Message>
            </li>
          )
        }
        <div ref={bottom => {this.bottom = bottom;}}></div>
      </ul>
    )
  };
}

export default MessageList;
