import React from 'react'
import TitleBar from "./TitleBar";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import Button from "@material-ui/core/Button";


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
    marginLeft: "15px",
    textDecoration: "underline"
  },
  noteContent: {
    margin: "0 55px"
  },
  btn: {
    display: "table",
    margin: "0 auto",
    padding: "50px 0 50px 0"
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
        <div className={classes.noteContent}>
          {cardDat.notes}
        </div>
      </div>
      <div className={classes.btn}>
        <Link to="/">
          <Button variant="contained" color="primary">Back to Main</Button>
        </Link>
      </div>


    </div>
  )
}
