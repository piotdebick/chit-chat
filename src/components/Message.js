import React from 'react';
import '../styles/Message.css'

function Message(props) {
  return (
      <div className='Message-box'>
        <p className='Message-text'>{props.from + ': ' + props.message}</p>
        <h4 className='Message-time'>{props.timeStamp}</h4>
      </div>
    )
}

export default Message;
