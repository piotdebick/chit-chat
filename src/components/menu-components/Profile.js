import React from 'react'
import '../../styles/Menu.css'
import TextField from 'material-ui/TextField';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.username,
      edit: true,
      nickNameDisabled: true
    }
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({edit: true})
    this.props.updateUser(this.state.text);
  }

  handleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleEnterKey = (e) => {
    if (e.which == 13 || e.keyCode == 13) {
    this.refs.blur();
   }

  }

  render() {
    return (<div className="NickNameBoxContainer">

      <form onSubmit={this.handleSubmit}>

        <input onChange={this.handleChange}
           value={this.state.text}
           id='uniqueid'
           onKeyPress={this.handleEnterKey}

         />

      </form>

    </div>)
  }

}

export default Profile;
