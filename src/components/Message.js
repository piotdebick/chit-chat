import React from 'react';

function Message(props) {
  return (
      <div>
        <h3>Name: {props.from}</h3>
        <p>Message: {props.message}</p>
        <h4>Time: {props.timeStamp}</h4>
      </div>
    )
}


export default Message;
