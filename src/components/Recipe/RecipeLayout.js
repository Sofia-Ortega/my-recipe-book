import React from 'react'
import TitleBar from "./TitleBar";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Ingredients from "./Ingredients";
import Directions from "./Directions";


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
  },
  headings: {
    fontFamily: "Bodoni MT",
    fontSize: "28px",
    marginLeft: "15px"
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
        <div className={classes.headings}>
          Ingredients:
        </div>
        <Ingredients ingrList={cardDat.ingredients}/>
      </div>
      <div>
        <div className={classes.headings}>
          Directions:
        </div>
        <Directions stepList={cardDat.steps}/>
      </div>
      <div>
        <div className={classes.headings}>
          Notes:
       </div>
        <div>
          {cardDat.notes}
        </div>
      </div>
      <Link to="/">
        <button>Go to main page</button>
      </Link>


    </div>
  )
}
