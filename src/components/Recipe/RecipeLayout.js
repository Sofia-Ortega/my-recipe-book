import React from 'react'
import TitleBar from "./TitleBar";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  layoutStyle: {
    height: "100vh"
  },
  description: {
    textAlign: "center",
    fontSize: "16px",
    fontStyle: "italic",
    margin: "0 215px",
    color: "#5b5b5b"
  }

});

export default function RecipeLayout({cardDat}) {
  const classes = useStyles();

  return(
    <div className={classes.layoutStyle}>
      <TitleBar title={cardDat.title}/>
      <div className={classes.description}>
        {cardDat.description}
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
