import React from 'react';
import Profile from './menu-components/Profile';
import Menu from './menu-components/Menu';
import MessageContainer from './message-components/MessageContainer';
import '../styles/MessageForm.css';
import '../App.css';
import MenuToggle from './menu-components/MenuToggle'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/cancel';



class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSource: '../images/send_icon.png',
      text: '',
      username: 'Anonymous',
      edit: false,
      renderChat: false
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({username: this.state.text, edit: true, renderChat: true})
  }

  updateUser = (data) => {
    this.setState({username: data})
  }

  render() {
    return (
      <div className='App'>
        <MenuToggle/>
        <MessageContainer username={this.state.username}></MessageContainer>
      </div>)
  }
}

export default Interface;
