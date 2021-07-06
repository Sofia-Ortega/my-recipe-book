import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

import AppBarLayout from "./AppBar/AppBarLayout.js" ;
import data from '../../assets/data.json'
import RecipeCards from "./RecipeCards";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function MainLayout () {
  const classes = useStyles()

  return (
    <div>
      <div>
        <AppBarLayout/>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <ReciperCards data={data.data} />
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
      <div>
        <button>ADD</button>
      </div>
    </div>
    )

};


