//Iterate through recipe cards
import React from 'react'
import Grid from '@material-ui/core/Grid';
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
}));

export default function RecipeCards({data}) {


  return (
    <div>
      {
        data.map((recipe) => (
          <Grid item xs={3}>
            <RecipeCard dat={recipe} key={recipe.id}/>
          </Grid>
        ))
      }
    </div>

  )
}
