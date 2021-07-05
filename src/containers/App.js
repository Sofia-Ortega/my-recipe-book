import React, { Component } from 'react';
import '../assets/css/App.css';

import MainLayout from '../components/MainScreen/MainLayout';


//ROUTER PAGE


class App extends Component {
  render() {
    const allStyle = {
      padding: 0,
      margin: 0,
      backgroundColor: '#3b9893'
    }
    return (
      <div style={allStyle}>
        <MainLayout />
      </div>
    );
  }
}

export default App;
