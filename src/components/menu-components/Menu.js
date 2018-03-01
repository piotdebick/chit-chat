import React from 'react';
import Profile from './Profile'
import '../../styles/Menu.css'
import user from '../../images/maxresdefault.jpg' // relative path to image
import FlatButton from 'material-ui/FlatButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';


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

        <br/>
        <div className="ImageContainer">
        <label  className="ImageUpload">
          <Avatar
            className="Avatar"
            src={user}
            size={80}
          />
          <input id="file-input" type="file"/>
        </label>


    </div>





        <Profile updateUser={this.props.updateUser} username={this.props.username} /*imgSource={this.props.imgSource}*/></Profile>

      </div>
    )
  };
}


export default Menu;
