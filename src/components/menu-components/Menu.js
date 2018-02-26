import React from 'react';
import Profile from './Profile'
import '../../styles/Menu.css'
import user from '../../images/default-user.png' // relative path to image

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
        <div className="MenuTitle">
          <div className="MenuTitle">
            Chit Chat
          </div>
          <br/>
          <div>
            <label className="ImageContainer">
              <input type="file" className="InputButton" />
              <img src={user} className="Avatar" />
          </label>

          </div>


        <Profile updateUser={this.props.updateUser} username={this.props.username} /*imgSource={this.props.imgSource}*/></Profile>
      </div>
      </div>
    )
  };
}


export default Menu;
