import React from 'react';
import Profile from './Profile'
import '../../styles/Menu.css'
import user from '../../images/default-user.png' // relative path to image
import FlatButton from 'material-ui/FlatButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    borderRadius: 30,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '60px',
    height: '60px',
    opacity: 1,
    border: "1px solid black",
  },
};


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


        <div>
          <input type="file" style={styles.uploadInput} />
          <Avatar
            src={user}
            size={60}
          />
        </div>





        <Profile updateUser={this.props.updateUser} username={this.props.username} /*imgSource={this.props.imgSource}*/></Profile>

      </div>
    )
  };
}


export default Menu;
