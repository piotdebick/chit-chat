import React from 'react';
import WarningBanner from './WarningBanner';
import '../../styles/WarningBanner.css';
import '../../styles/MessageForm.css';

class MessageForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: 'Anonymous',
      text: '',
      warn: false,
      errorMsg:'Cannot send empty messages!',
      socket: props.socket
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange (e) {
    e.preventDefault();
    this.setState({warn: false});
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit (e) {
    e.preventDefault();
    const { socket } = this.state;
    if(this.state.text.length > 0){
      socket.emit('createMessage',{
        from: this.state.user,
        text: this.state.text
      });
      this.setState({text: ''});
    } else {
      this.setState({warn: true});
    }
  };

  render () {
    return(
      <div>
        <form className='MessageForm' onSubmit = {this.handleSubmit} >
          <input type='text'    className='MessageForm-text'
            value={this.state.text} onChange={this.handleChange}
            placeholder='Write a comment..'
            >
          </input>
          <button className='MessageForm-button' type='button'
            onClick={this.handleSubmit}>Send
          </button>
        </form>
        <WarningBanner warn={this.state.warn} errorMessage={this.state.errorMsg}></WarningBanner>
    </div>
    )
  };
}


export default MessageForm;
