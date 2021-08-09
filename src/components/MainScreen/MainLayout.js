import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { ipcRenderer } from "electron";
import Button from '@material-ui/core/Button';
import AppBarLayout from "./AppBar/AppBarLayout.js" ;
import data from '../../../data.json'
import RecipeCards from "./RecipeCards";


export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.openCard = this.openCard.bind(this);
  }

  openCard(id) {
    this.props.openCardTest(id);
  }

  render() {
    const mainLayoutStyle = {
      height: "100vh",
      backgroundColor: "#f5f5f5",
      marginBottom: "0 10px"
    }

    const addButton = {
      display: "table",
      margin: "0 auto",
      padding: 0
    }


    return(
      <div style={mainLayoutStyle}>
        <div>
          <AppBarLayout/>
        </div>
        <RecipeCards data={data.data} openCard={this.openCard}/>
        <div style={addButton}>
          <Link to="/add">
            <Button variant="contained" color="secondary" >
              Add
            </Button>
          </Link>
        </div>
      </div>
    )
  }
};
