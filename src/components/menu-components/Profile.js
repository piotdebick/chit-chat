import React from 'react';

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
        <img src={this.props.imgSource}/>
        <form onSubmit={this.handleSubmit}>
          <input disabled={this.state.edit} type='text'
            value={this.state.text} onChange={this.handleChange}
            >
          </input>
          <button type='button' onClick={this.handleEdit}>?</button>
        </form>
      </div>
    )
  }

}

export default Profile;
