import React from 'react';
import jstz from 'jstz';
import moment from 'moment-timezone';
import '../../styles/Message.css'

function Message(props) {
  const timeZone = jstz.determine().name();
  const timeZoneData = moment(props.timeStamp).tz(timeZone);
  const currDate = timeZoneData.format("ddd, MMM Do YYYY");
  const currTime = timeZoneData.format("h:mm:ss A")
  return (
      <div className='Message-box'>
        <div className='Message-title'>
          <h3 className='Message-name'>{props.from}</h3>
          <h3 className='Message-time'>{currTime}</h3>
        </div>
        <p className='Message-text'>{props.message}</p>

      </div>
    )
}

export default Message;
