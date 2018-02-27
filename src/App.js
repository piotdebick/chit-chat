import React, { Component } from 'react';
import Interface from './components/Interface';
import './App.css';
import './styles/borders.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <div >
        <MuiThemeProvider>
          <Interface className='App' ></Interface>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
