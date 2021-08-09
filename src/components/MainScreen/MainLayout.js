import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import AppBarLayout from "./AppBar/AppBarLayout.js" ;
import data from '../../../data.json'
import RecipeCards from "./RecipeCards";


export default function MainLayout()  {

  function openCard(id) {
    this.props.openCardTest(id);
  }

    const mainLayoutStyle = {
      minHeight: "100vh",
      minWidth: "660px",
      backgroundColor: "#f5f5f5",
      marginBottom: "0 10px"
    }

    const addButton = {
      display: "table",
      margin: "0px auto",
    }


    return(
      <div style={mainLayoutStyle}>
        <div>
          <AppBarLayout/>
        </div>
        <RecipeCards data={data.data} openCard={openCard}/>
        <div style={addButton}>
          <Link to="/add">
            <Button variant="contained" color="secondary" >
              Add
            </Button>
          </Link>
        </div>
      </div>
    )

};
