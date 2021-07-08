//Iterate through recipe cards
import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

import RecipeCard from "./RecipeCard";
import {makeStyles} from "@material-ui/core/styles";

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
  recipeCards: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

export default function RecipeCards({data}) {
  const classes = useStyles();

  return (
    <div className={classes.recipeCards}>
      {
        data.map((recipe) => (
          <RecipeCard dat={recipe} key={recipe.id}/>
        ))
      }

    </div>
  )
}
