import React from "react";
import MainLayout from "./MainScreen/MainLayout";
import ExpandRecipeLayout from "./ExpandRecipe/ExpandRecipeLayout";
import { HashRouter, Route} from "react-router-dom";

export default function Main() {
  return (
    <HashRouter>
      <Route exact path="/" component={MainLayout}></Route>
      <Route exact path="/expandRecipe" component={ExpandRecipeLayout}></Route>
    </HashRouter>
  )
}
