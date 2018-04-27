import React from 'react';
import jstz from 'jstz';
import moment from 'moment-timezone';
import '../../styles/Message.css'
import {
  Card,
  CardHeader
} from 'material-ui/Card';
import userImage from "../../images/default-user.png";

const styles = {
  paddingTop: "5px",
  paddingBottom: "1px",
  paddingLeft: "15px",
  paddingRight: "15px",
};




function Message(props) {
  const timeZone = jstz.determine().name();
  const timeZoneData = moment().tz(props.timeStamp, timeZone);
  const currDate = timeZoneData.format("ddd, MMM Do YYYY");
  const currTime = timeZoneData.format("h:mm:ss A")
  const userStyle = {color: props.userColor};
  const header = <span style={userStyle}>{props.from}<span className="TimeStyle"> {currTime}</span></span>

  return (
  /*
      <div className='Message-box'>
        <div className='Message-title'>
          <h3 className='Message-name'>{props.from}</h3>
          <h3 className='Message-time'>{currTime}</h3>
        </div>
        <p className='Message-text'>{props.message}</p>

      </div>
      */
  <Card>
    <CardHeader
      title={header}
      subtitle={props.message}
      style={styles}
      avatar={userImage}/>
  </Card>)
}

export default Message;
