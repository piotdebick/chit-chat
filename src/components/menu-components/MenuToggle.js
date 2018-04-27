import React from 'react';
import Menu from './Menu';
import {Drawer, IconButton, AppBar} from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/cancel';

const style = {
  WebkitBoxShadow: "0px 0px 0px #9E9E9E",
  MozBoxShadow: "0px 0px 0px #9E9E9E",
  boxShadow: "0px 0px 0px #9E9E9E",
  height: "auto"
};
class MenuToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleToggle = () => this.setState({
    open: !this.state.open
  });

  render (){
    return (
      <div>
      <AppBar title="Chit Chat" showMenuIconButton={false}
        iconElementRight={
          <IconButton label = "Toggle"
            onClick = {this.handleToggle}>
            <NavigationMenu/>
          </IconButton>}/>
      <Drawer open={this.state.open} openSecondary={true} containerStyle={style} width="25%">
        <AppBar showMenuIconButton={false}
          iconElementRight={
            <IconButton label = "Toggle"
              onClick = {this.handleToggle}>
              <NavigationClose/>
            </IconButton>}/>
          <Menu updateUser={this.updateUser} imgSource={this.state.imgSource} username={this.state.username}></Menu>
      </Drawer>
    </div>
  )}
}

export default MenuToggle;
