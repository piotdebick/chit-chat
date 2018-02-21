import React from 'react';
import '../../styles/MessageForm.css'

class MessageForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: 'Anonymous',
      text: '',
      socket: props.socket
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange (e) {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit (e) {
    e.preventDefault();
    const { socket } = this.state;
    socket.emit('createMessage',{
      from: this.state.user,
      text: this.state.text
    });
    this.setState({text: ''});
  };

  render () {
    return(
      <form className='MessageForm' onSubmit = {this.handleSubmit}>
        <textarea className='MessageForm-text'
          value={this.state.text} onChange={this.handleChange}
          placeholder='Write a comment..'
          >
        </textarea>
        <input className='MessageForm-button' type='submit' value='Send'>
        </input>
      </form>
    )
  };
}


export default MessageForm;
