import React, { Component } from 'react';
import MessageContainer from './components/message-components/MessageContainer'
import StartScreen from './components/startscreen-components/StartScreen'
import MenuInterface from './components/menu-interface-components/MenuInterface'
import './App.css';
//import './styles/borders.css'


class App extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      username: 'Anonymous',
      edit: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      username: this.state.text,
      edit: true
    })
  }

  handleEdit() {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    return (
      <div className='App'>


            <form onSubmit = {this.handleSubmit}>
              <input disabled={this.state.edit} type='text'
                value={this.state.text} onChange={this.handleChange}
                placeholder='Choose a username..'
                >
              </input>
            </form>
            <button onClick={this.handleEdit}>
              Edit
            </button>
            <MessageContainer username={this.state.username}></MessageContainer>
            <MenuInterface username={this.state.username}></MenuInterface>



          {
            //<StartScreen></StartScreen>
          }


      </div>
    );
  }
}

export default App;
