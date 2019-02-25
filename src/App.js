import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DepartmentsCombobox from './components/Combobox';

class App extends Component {

    render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <DepartmentsCombobox/>
      </div>
    );
  }
}

export default App;
