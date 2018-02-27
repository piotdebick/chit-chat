import React from 'react';
import Menu from './menu-components/Menu';
import MessageContainer from './message-components/MessageContainer';
import '../styles/MessageForm.css';
import '../App.css';
import {Drawer, IconButton, AppBar} from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';


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



            {//this.state.renderChat ?
            }
            <div>
              <div>
              <AppBar
                title="Chit Chat"
                showMenuIconButton={false}
                iconElementRight={
                    <IconButton label="Toggle" onClick={this.handleToggle} ><NavigationMenu /></IconButton>
                }
              />
            </div>
              <MessageContainer bram='jope' username={this.state.username}></MessageContainer>


                <Drawer open={this.state.open} openSecondary={true} >
                  <div className="IconButtonContainer">
                    <IconButton label="Toggle" onClick={this.handleToggle} className="IconButtonContainer" ><NavigationMenu /></IconButton>
                  </div>
                    <Menu updateUser={this.updateUser} imgSource={this.state.imgSource} username={this.state.username}></Menu>

                </Drawer>





            {/*</div> :
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
            */}

          </div>
      </div>
    );
  }
}

export default Interface;
