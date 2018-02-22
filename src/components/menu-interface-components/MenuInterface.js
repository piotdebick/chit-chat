import React from 'react';
import '../../styles/MenuInterface.css'

class MenuInterface extends React.Component {

  render () {
    return(
      <div className="MenuInterface">
        <div className="MenuTitle">
          Chit Chat
          <button className="MenuButton">
            Menu
          </button>
        </div>
        <br/>

      </div>
    )
  };
}


export default MenuInterface;
