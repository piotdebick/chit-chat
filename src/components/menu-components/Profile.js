import React from 'react'
import '../../styles/Menu.css'
import TextField from 'material-ui/TextField';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.username,
      edit: true,
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
    if(this.state.text.length > 2){
      this.props.updateUser(this.state.text);
    }
    else{
      this.setState({text:this.props.username})
    }

    this.textInput.current.blur();
  }

  handleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleClick = () =>{
    this.setState({text: ""});
  }
  render() {
    return (<div className="NickNameBoxContainer">

      <form onSubmit={this.handleSubmit}>

        <input onChange={this.handleChange}
           value={this.state.text}
           id='uniqueid'
           ref={this.textInput}
           onClick={this.handleClick}
         />

      </form>

    </div>)
  }

}

export default Profile;
