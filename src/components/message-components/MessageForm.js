import React from 'react';
import '../../styles/MessageForm.css';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentSend from 'material-ui/svg-icons/content/send';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      warn: false
    };
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({warn: false, text: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {socket} = this.props;
    if (this.state.text.length > 0) {
      socket.emit('createMessage', {
        from: this.props.username,
        text: this.state.text,
        userColor:this.props.userColor
      });
      this.setState({text: ''});
    }
  };

  render() {
    return (
      <div>
        <form className='MessageForm' onSubmit={this.handleSubmit} autoComplete="off">
          <TextField hintText="comment.."
            value={this.state.text}
            onChange={this.handleChange}
            fullWidth={true}
            className="CommentBox"
            type="none"
          />

          <div>
            <IconButton
              onClick={this.handleSubmit}
              labelposition="before"
              primary="true">
              <ContentSend/>
            </IconButton>
          </div>
        </form>
      </div>
    )
  };
}

export default MessageForm;
