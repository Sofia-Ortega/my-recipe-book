//Iterate through recipe cards
import React from 'react'
import RecipeCard from "./RecipeCard";
import {makeStyles} from "@material-ui/core/styles";
import {ipcRenderer} from "electron";

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

export default function RecipeCards({data, openCard}) {
  const classes = useStyles();

  if (data === []) {
    ipcRenderer.send("sendDataJson");
    return (
      <div>Loading</div>
    )

  } else {

    return (
      <div className={classes.recipeCards}>
        {
          data.map((recipe) => (
            <RecipeCard dat={recipe} key={recipe.id} openCard={openCard}/>
          ))
        }
      </div>
    )
  }
}
