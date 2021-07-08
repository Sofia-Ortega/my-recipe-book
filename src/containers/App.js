import React, { Component } from 'react';
import '../assets/css/App.css';

import MainLayout from '../components/MainScreen/MainLayout';
import ExpandRecipeLayout from "../components/ExpandRecipe/ExpandRecipeLayout";
import {HashRouter, Route} from "react-router-dom";


//ROUTER PAGE
class App extends Component {
  render() {
    const allStyle = {
      padding: 0,
      margin: 0,
    }
    return (
      <HashRouter style={allStyle}>
        <Route exact path="/" component={MainLayout}></Route>
        <Route exact path="/expandRecipe" component={ExpandRecipeLayout}></Route>
      </HashRouter>
    );
  }
}

export default App;
