import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AppBarLayout from "./AppBar/AppBarLayout.js" ;
import data from '../../../data.json'
import RecipeCards from "./RecipeCards";


export default class MainLayout extends Component {
  constructor(props) {
    super(props)
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
        <RecipeCards data={data.data} />
        <div style={addButton}>
          <Button variant="contained" color="primary" >
            Add
          </Button>
        </div>
      </div>
    )
  }




};


