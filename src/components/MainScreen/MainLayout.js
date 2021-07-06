import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

import AppBarLayout from "./AppBar/AppBarLayout.js" ;
import data from '../../assets/data.json'
import RecipeCards from "./RecipeCards";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f5f5f5",
  },
  button: {
    display: "table",
    margin: "0 auto",
    padding: 0
  }
}));


export default function MainLayout () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <AppBarLayout/>
      </div>
      <RecipeCards data={data.data} />
      <div className={classes.button}>
        <Button variant="contained" color="primary" >
          Add
        </Button>
      </div>
    </div>
    )

};


