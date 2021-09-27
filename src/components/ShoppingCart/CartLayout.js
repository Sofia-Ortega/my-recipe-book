import React, {useState, useEffect} from "react";
import { ipcRenderer } from "electron";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

// .............Styling ..................
const useStyles = makeStyles( (theme) =>({
  root: {
  },
  title: {
    fontSize: "40px",
    textAlign: "center",
    minWidth: "200px"
  },
  center: {
    display: "table",
    margin: "0 auto"
  }
}));

// ...............Cart Layout........................
export default function CartLayout() {
  const classes = useStyles();
  const [cartIngr, setCartIngr] = useState([]);

  useEffect( () => {
    ipcRenderer.on("sendCartData", handleData);
    return () => {
      ipcRenderer.removeListener("sendCartData", handleData);
    }
  }, [])

  const handleData = (event, arg) => {
    let temp = [];
    for (const value in key) {
      let dat = {
        recipe: ""
      }
      temp.push([])
      console.log(`${key}: ${key[value].name}`);
    }

  }

  const handleRefresh = () => {
    ipcRenderer.send("requestCartData")
  }
  return(
    <div className={classes.root}>
      <div className={classes.title}>Shopping Cart</div>
      <div className={classes.center}>
        <Button variant="contained" color="primary" onClick={handleRefresh}>Refresh</Button>
      </div>
      <div className={classes.center}>
        <Link to="/">
          <Button variant="outlined" color="primary">Main menu</Button>
        </Link>
      </div>
    </div>
  )
}
