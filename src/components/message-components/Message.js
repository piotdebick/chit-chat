import React from 'react';
import jstz from 'jstz';
import moment from 'moment-timezone';
import '../../styles/Message.css'

function Message(props) {
  const timeZone = jstz.determine().name();
  const currTime = moment(props.timeStamp).tz(timeZone).format("ddd, MMM Do YYYY, h:mm:ss a");
  return (
      <div className='Message-box'>
        <p className='Message-text'>{props.from + ': ' + props.message}</p>
        <h4 className='Message-time'>{currTime}</h4>
      </div>
    )
}

export default Message;
