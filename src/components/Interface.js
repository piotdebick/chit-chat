import React from 'react';
import Menu from './menu-components/Menu';
import MessageContainer from './message-components/MessageContainer';
import '../styles/MessageForm.css';
import '../App.css';
import {Drawer,MenuItem,RaisedButton} from 'material-ui';


class Interface extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgSource:'../images/send_icon.png',
      text: '',
      username: 'Anonymous',
      edit: false,
      renderChat:false,
      open: false,
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      username: this.state.text,
      edit: true,
      renderChat:true
    })
  }

  updateUser = (data) => {
    this.setState({
      username:data
    })
  }

  render() {
    return (
      <div>
          {
            this.state.renderChat ?
            <div className='App'>
              <MessageContainer bram='jope' username={this.state.username}></MessageContainer>

              <div>
                <RaisedButton
                  label="Toggle"
                  onClick={this.handleToggle}
                />
                <Drawer open={this.state.open} openSecondary={true}>
                    <Menu updateUser={this.updateUser} imgSource={this.state.imgSource} username={this.state.username}></Menu>
                </Drawer>
              </div>




            </div> :
            <div>
              <h1>Welcome to Chit Chat</h1>
              <form onSubmit = {this.handleSubmit}>
                <input disabled={this.state.edit} type='text'
                  value={this.state.text} onChange={this.handleChange}
                  placeholder='Choose a username..'
                  >
                </input>
              </form>
            </div>
          }
      </div>
    );
  }
}

export default Interface;
