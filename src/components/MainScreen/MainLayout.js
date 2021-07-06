import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

import AppBarLayout from "./AppBar/AppBarLayout.js" ;
import data from '../../assets/data.json'
import RecipeCards from "./RecipeCards";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f5f5f5",
  },
}));


export default function MainLayout () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <AppBarLayout/>
      </div>
      <RecipeCards data={data.data} />
      <div>
        <button>ADD</button>
      </div>
    </div>
    )

};


