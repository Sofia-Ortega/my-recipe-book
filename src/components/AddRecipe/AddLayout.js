import React from 'react'
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( {
  title: {
    fontSize: "40px",
    borderBottom: "1px solid black",
    margin: "0 200px",
    padding: "30px 0 15px 0",
    textAlign: "center",
  },
  center: {
    display: "table",
    margin: "0 auto"
  }
})

export default function AddLayout() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>
        Add Recipe
      </div>
      <div>
        Recipe Title:
      </div>
      <div>
       Description:
      </div>
      <div>
        Type:
      </div>
      <div>
        Ingredients:
        <br />
        ----- quantity
        ----- name
      </div>
      <div>
        Notes: (optional)
      </div>
     <Link to="/">
       <Button variant="contained" color="primary" className={classes.center}>
         Main Page
       </Button>
     </Link>
    </div>
  )
}
