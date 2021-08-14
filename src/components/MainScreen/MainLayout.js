import React, {useState, useEffect} from 'react';
import {ipcRenderer} from 'electron';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import AppBarLayout from "./AppBar/AppBarLayout.js" ;
// import data from '../../../data.json'
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
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState({data: []});
  const [itemNum, setItemNum] = useState(0);
  const [empty, setEmpty] = useState(false);

  useEffect( () => {
    ipcRenderer.send("sendDataJson");
    ipcRenderer.on("dataJson", handleJson);
    ipcRenderer.on("addedCartItems", openPopup);
    return () => {
      ipcRenderer.removeListener("dataJson", handleJson);
      ipcRenderer.removeListener("addedCartItems", openPopup);
    }
  }, [])

  const handleJson = (event, arg) => {
    console.log("setting data: ", arg);
    if(arg.data[0] !== "empty") {
      setEmpty(true);
      setData(arg);
    } else {
      setEmpty(false);
    }
  }
  const openPopup = (event, num) => {
    console.log("opening popup: ", num);
    if(num > 0 ) {
      setItemNum(num);
      setPopup(true);
    }
  }

  const closePopup = (event, reason) => {
    if( reason === 'clickaway') return;
    setPopup(false);
  }

  const showData = () => {
    console.log(data);
    console.log(empty);
    ipcRenderer.send("sendDataJson");
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
        <AppBarLayout />
      </div>
      {
        empty ?
          <RecipeCards data={data.data} openCard={openCard}/> :
          <div>Empty</div>
      //  FIXME: Add Loading Page
      }
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        TransitionComponent={Fade}
        open={popup}
        autoHideDuration={3000}
        // onClose={closePopup}
        message={`${itemNum} Items added to your Shopping Cart`}
        action={
          <div className={classes.popup}>
            <IconButton size="small" aria-label="close" color="inherit" onClick={closePopup}>
            <CloseIcon fontSize="small" />
            </IconButton>
          </div>
        }
        />
        {/*<Button variant="outlined" color="primary" onClick={showData}>Show data state</Button>*/}
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
