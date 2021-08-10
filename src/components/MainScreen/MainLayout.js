import React, {useState, useEffect} from 'react';
import {ipcRenderer} from 'electron';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import AppBarLayout from "./AppBar/AppBarLayout.js" ;
import data from '../../../data.json'
import RecipeCards from "./RecipeCards";
import {makeStyles} from "@material-ui/core/styles";
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles(() => ({
  popup: {
    backgroundColor: "#00860af0"
  },
  '.MuiSnackbar-root': {
    backgroundColor: "blue"
  },
  root: {
    backgroundColor: "red",
  }
}))
export default function MainLayout({openCard})  {
  const classes = useStyles();
  const [popup, setPopup] = useState(true);
  let numOfItems = 0;

  useEffect( () => {
    ipcRenderer.on("addedCartItems", openPopup)
    return () => {
      ipcRenderer.removeListener("addedCartItems", openPopup);
    }
  }, [])

  const openPopup = (num) => {
    let numOfItems = num;
    setPopup(true);
  }

  const closePopup = (event, reason) => {
    if( reason === 'clickaway') return;

    setPopup(false);
  }


const mainLayoutStyle = {
    minHeight: "100vh",
    minWidth: "660px",
    backgroundColor: "#f5f5f5",
    marginBottom: "0 10px"
  }

  const addButton = {
    display: "table",
    margin: "0px auto",
  }

  return(
    <div style={mainLayoutStyle}>
      <div>
        <AppBarLayout/>
      </div>
      <RecipeCards data={data.data} openCard={openCard}/>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        TransitionComponent={Fade}
        open={popup}
        // autoHideDuration={3000}
        onClose={closePopup}
        message={`${numOfItems} items added to shopping cart`}
        action={
          <div className={classes.popup}>
            <IconButton size="small" aria-label="close" color="inherit" onClick={closePopup}>
            <CloseIcon fontSize="small" />
            </IconButton>
          </div>
        }
        />
        <Button variant="outlined" color="primary" onClick={openPopup}>Open Popup</Button>


      <div style={addButton}>
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
