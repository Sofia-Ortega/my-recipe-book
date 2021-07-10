import React from 'react'
import TitleBar from "./TitleBar";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  layoutStyle: {
    //backgroundColor: "#f5f5f5",
    height: "100vh"
  },
  recipeTitle: {

  }

});

export default function RecipeLayout({cardDat}) {
  const classes = useStyles();

  return(
    <div className={classes.layoutStyle}>
      <TitleBar title={cardDat.title}/>
      <div>
        Description: {cardDat.description}
      </div>
      <div>
        Ingredients:
      </div>
      <div>
        Directions:
      </div>
      <div>
        Notes: {cardDat.notes}
      </div>
      <Link to="/">
        <button>Go to main page</button>
      </Link>


    </div>
  )
}
