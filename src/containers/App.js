import React, { useState } from 'react';
import '../assets/css/App.css';
import MainLayout from '../components/MainScreen/MainLayout';
import RecipeLayout from "../components/Recipe/RecipeLayout";
import AddLayout from "../components/AddRecipe/AddLayout";
import {HashRouter, Route} from "react-router-dom";

import test from "../../test.json"

//ROUTER PAGE
function App() {

  const [cardDat, setCardDat] = useState(test);

  function openCardTest(dat) {
   console.log("up here in app: ", dat);
   setCardDat(dat);
  }
  const allStyle = {
    padding: 0,
    margin: 0,
  }

  return (
    <HashRouter style={allStyle}>
      <Route
        exact path="/"
        render={(props) => (
          <MainLayout{...props} openCardTest={openCardTest}/>
        )}
      />

      <Route
        exact path="/recipe"
        render={(props) => (
          <RecipeLayout{...props} cardDat={cardDat}/>
        )}
      />
      <Route exact path="/add" component={AddLayout} />
    </HashRouter>
  );

}

export default App;
