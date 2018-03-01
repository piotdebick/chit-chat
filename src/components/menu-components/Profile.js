import React from 'react'
import '../../styles/Menu.css'
import TextField from 'material-ui/TextField';



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.username,
      edit: true
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) =>  {
    e.preventDefault();
    this.setState({
      edit: true
    })
    this.props.updateUser(this.state.text);
  }

  handleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
        {/*  <input
            disabled={this.state.edit}
            type='text'
            value={this.state.text}
            onChange={this.handleChange}
            className="NickNameBox"
            >

          </input>

          <button type='button' onClick={this.handleEdit}>HELLO</button>
          */}

          <TextField
            className="NickNameBox"
            value={this.state.text}
            onChange={this.handleChange}
            id='uniqueid'
            fullWidth={false}

            ></TextField>

        </form>


      </div>
    )
  }

}

export default Profile;
