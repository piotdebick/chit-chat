import React from 'react';
import WarningBanner from './WarningBanner';
import '../../styles/WarningBanner.css';
import '../../styles/MessageForm.css';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ContentSend from 'material-ui/svg-icons/content/send';

class MessageForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      warn: false,
      socket: props.socket
    };
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({warn: false, text: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { socket } = this.state;
    if(this.state.text.length > 0){
      socket.emit('createMessage',{
        from: this.props.username,
        text: this.state.text
      });
      this.setState({text: ''});
    }
  };

  render () {
    return(
      <div>
        <form className='MessageForm' onSubmit = {this.handleSubmit} >
          {/*<input type='text'    className='MessageForm-text'
            value={this.state.text} onChange={this.handleChange}
            placeholder='Write a comment..'
            >
          </input>
          <button className='MessageForm-button' type='button'
            onClick={this.handleSubmit}>
          </button>
          */}

          <TextField
              hintText="comment.."
              value={this.state.text}
              onChange={this.handleChange}
              fullWidth={true}
              className="CommentBox"

            />


            <div>
              <IconButton
                onClick={this.handleSubmit}
                 labelPosition="before"
                 primary={true}
                >
                <ContentSend />
              </IconButton>
           </div>

        </form>
        <WarningBanner warn={this.state.warn} errorMessage={this.state.errorMsg}></WarningBanner>

    </div>
    )
  };
}


export default MessageForm;
