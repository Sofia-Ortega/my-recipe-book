import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  layoutStyle: {
    backgroundColor: "#f5f5f5",
    height: "100vh"
  },
  appBarStyle: {
    backgroundColor: "#ffffff"
  },
  logoStyle: {
    display: "table",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "40px",
    color: "#02005D",
    fontFamily: "Pacifico",
    fontWeight: "400",
  },
  bottomLineStyle: {
    margin: "0 30vw",
    paddingBottom: "10px",
    borderTop: "3px solid #02005D",
  }

});

export default function RecipeLayout({cardDat}) {
  const classes = useStyles();

  return(
    <div className={classes.layoutStyle}>
      <div className={classes.appBarStyle}>
        <div className={classes.logoStyle}>My Recipe Book</div>
        <div className={classes.bottomLineStyle}></div>
      </div>
      <div>
        <div>
          {cardDat.title}
        </div>
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

    </div>
  )
}
