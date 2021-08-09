import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) =>({
  root: {
  },
  title: {
    fontSize: "40px",
    margin: "0 200px",
    textAlign: "center",
  },
  center: {
    display: "table",
    margin: "0 auto"
  }
}));


export default function CartLayout() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <div className={classes.title}>Shopping Cart</div>
      <div className={classes.center}>
        <Link to="/">
          <Button variant="outlined" color="primary">Main menu</Button>
        </Link>
      </div>
    </div>
  )
}
