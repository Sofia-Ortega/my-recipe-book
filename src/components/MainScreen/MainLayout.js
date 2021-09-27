import React, {useState, useEffect} from 'react';
import {ipcRenderer} from 'electron';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AppBarLayout from "./AppBar/AppBarLayout.js" ;
import RecipeCards from "./RecipeCards";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  mainLayout: {
    minHeight: "100vh",
    minWidth: "660px",
    backgroundColor: "#f5f5f5",
    marginBottom: "0 10px"
  },
  addBtn: {
    display: "table",
    margin: "0px auto",
  },
}))

export default function MainLayout({openCard})  {
  const classes = useStyles();
  const [data, setData] = useState({data: []});
  const [empty, setEmpty] = useState(false);

  useEffect( () => {
    ipcRenderer.send("sendDataJson");
    ipcRenderer.on("dataJson", handleJson);
    return () => {
      ipcRenderer.removeListener("dataJson", handleJson);
    }
  }, [])

  const handleJson = (event, arg) => {
    //gets recipe data from electron
    console.log("setting data: ", arg);
    if(arg.data[0] !== "empty") {
      setEmpty(true);
      setData(arg);
    } else {
      setEmpty(false);
    }
  }

  return(
    <div className={classes.mainLayout}>
      <AppBarLayout />
      {
        empty ?
          <RecipeCards data={data.data} openCard={openCard}/> :
          <div>Empty</div>
      }
      <div className={classes.addBtn}>
        <Link to="/add">
          <Button variant="contained" color="secondary" >
           <div style={{marginRight: "4px"}}>Add</div>
           <AddIcon />
          </Button>
        </Link>
      </div>
    </div>
  )

};
