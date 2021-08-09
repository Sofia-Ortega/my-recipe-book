import React, {useState} from 'react';
import { ipcRenderer } from "electron";
import TitleBar from "./TitleBar";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"


const useStyles = makeStyles((theme) => ({
  layoutStyle: {
    paddingBottom: "10px"
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
    margin: "0 55px 10px 55px"
  },
  btn: {
    display: "table",
    margin: "0 auto",
    padding: "10px 0"
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalBtns: {
    display: "table",
    margin: "0 auto",

  }
}));

export default function RecipeLayout({cardDat, review}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  }

  const handleCloseModal = () => {
    setOpen(false);
  }

  const handleDelete = () => {
    console.log("Deleting", cardDat.title);
    ipcRenderer.send("deleteRecipe", cardDat.id);
  }

  if(cardDat === undefined) {
    return (
      <div>Error</div>
    )
  } else {

    return (
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
        <div>
          {review === false && (
            <div>
              <div className={classes.btn}>
                <Link to="/">
                  <Button variant="contained" color="primary">Back to Main</Button>
                </Link>
              </div>
              <div className={classes.btn}>
                <Button variant="outlined" color="secondary" onClick={handleOpenModal}>Delete</Button>
              </div>
            </div>
          )}
        </div>
        <Modal
          open={open}
          onClose={handleCloseModal}
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <div className={classes.paper}>
            <Fade in={open}>
              <div>
                <h1 id="simple-modal-title">Confirm Delete?</h1>
                <div style={{textAlign: "center"}}>
                  Are you sure you want to PERMANENTLY delete your recipe?
                </div>
                <br/>
                <div id="simple-modal-description">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.modalBtns}
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </Button>
                  <br/>
                  <Link to="/">
                    <Button
                      variant="outlined"
                      color="secondary"
                      className={classes.modalBtns}
                      onClick={handleDelete}
                    >
                      Delete Permanently
                    </Button>
                  </Link>
                </div>
              </div>
            </Fade>

          </div>

        </Modal>

      </div>
    )
  }
}
