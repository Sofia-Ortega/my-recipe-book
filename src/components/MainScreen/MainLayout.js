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
    // console.log(id);
    ipcRenderer.send('OPEN-CARD', id)
    this.props.openCardTest(id);
  }

  render() {
    const mainLayoutStyle = {
      backgroundColor: "#f5f5f5",
      height: "100vh"
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
          <Button variant="contained" color="primary" >
            Add
          </Button>
        </div>
        <Link to="/test">
          <button>hahahah</button>
        </Link>
      </div>
    )
  }
};
