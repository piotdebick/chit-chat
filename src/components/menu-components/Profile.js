import React from 'react'
import '../../styles/Menu.css'
import TextField from 'material-ui/TextField';

const style = {
  textAlign: 'center'
}
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.username,
      edit: true
    };
    this.textInput = React.createRef();
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({edit: true})
    if (this.state.text.length >= 2) {
      this.props.updateUser(this.state.text);
    } else {
      this.setState({text: this.props.username})
    }

    this.textInput.current.blur();
  }

  handleClick = () => {
    this.setState({text: ""});
  }

  render() {
    return (<div className="NickNameBoxContainer">

      <form onSubmit={this.handleSubmit}>

        <TextField id='uniqueid'
           onClick={this.handleClick}
           onChange={this.handleChange}
           value={this.state.text}
           ref={this.textInput}
           inputStyle={style}
           onBlur={this.handleSubmit}/>

      </form>

    </div>)
  }

}

export default Profile;
