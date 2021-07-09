import React, { useState } from 'react';
import '../assets/css/App.css';
import Test from "../components/Test"
import MainLayout from '../components/MainScreen/MainLayout';
import RecipeLayout from "../components/Recipe/RecipeLayout";
import {HashRouter, Route} from "react-router-dom";


//ROUTER PAGE
function App() {

  const [cardDat, setCardDat] = useState({});

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
      {/*<Route exact path="/" component={MainLayout} openCard={openCardTest}></Route>*/}
      <Route exact path="/test" component={Test} ></Route>
      {/*<Route exact path="/recipe" component={RecipeLayout}></Route>*/}
    </HashRouter>
  );

}

export default App;
