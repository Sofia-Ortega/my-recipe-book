import React, { useState } from 'react';
import '../assets/css/App.css';
import MainLayout from '../components/MainScreen/MainLayout';
import RecipeLayout from "../components/Recipe/RecipeLayout";
import AddLayout from "../components/AddRecipe/AddLayout";
import CartLayout from "../components/ShoppingCart/CartLayout";
import {HashRouter, Route} from "react-router-dom";

import data from "../../data.json"


//ROUTER PAGE
function App() {

  //FIXME: useState(""); //for testing purposes only
  const [cardDat, setCardDat] = useState(data.data[0]);

  const openCard = (dat) => {
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
          <MainLayout{...props} openCard={openCard}/>
        )}
      />

      <Route
        exact path="/recipe"
        render={(props) => (
          <RecipeLayout{...props} cardDat={cardDat} review={false}/>
        )}
      />
      <Route exact path="/add" component={AddLayout} />
      <Route exact path="/cart" component={CartLayout} />
    </HashRouter>
  );

}

export default App;
