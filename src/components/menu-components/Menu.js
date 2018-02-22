import React from 'react';
import Profile from './Profile'
import '../../styles/MenuInterface.css'

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      edit: false
    }
  }

  render () {
    return(
      <div className="MenuInterface">
        <Profile updateUser={this.props.updateUser} username={this.props.username} imgSource={this.props.imgSource}></Profile>

      </div>
    )
  };
}


export default Menu;
