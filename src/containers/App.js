import React, { useState } from 'react';
import '../assets/css/App.css';
import MainLayout from '../components/MainScreen/MainLayout';
import RecipeLayout from "../components/Recipe/RecipeLayout";
import {HashRouter, Route} from "react-router-dom";


//ROUTER PAGE
function App() {

  const [cardDat, setCardDat] = useState(
    {
      "title": "Recipe Title",
    });

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
    </HashRouter>
  );

}

export default App;
