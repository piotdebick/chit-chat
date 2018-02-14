import React from 'react';
import Message from './Message'

function MessageList(props) {
  return (
    <ul>
      {
        props.messages.map((message, index) =>
          <li key={index}>
            <Message
              from={message.from}
              message={message.text}
              timeStamp={message.createdAt}></Message>
          </li>
        )
      }
    </ul>
  )
}

export default MessageList;
