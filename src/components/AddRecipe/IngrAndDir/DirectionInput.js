import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Directions from "./mapItems/Directions"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Grid from "@material-ui/core/Grid"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) =>({
  root: {
    margin: "20px 0px",
  },
  headings: {
    fontFamily: "Bodoni MT",
    fontSize: "28px",
    marginLeft: "15px",
  },
  addBtn: {
    color: "#4d0069"
  },
  body: {
    marginLeft: "30px",
    // backgroundColor: "orange"
  }
}))

export default function DirectionInput({addDir, delDir, dirList}) {
  const classes = useStyles();
  const [val, setVal] = useState("")

  const handleChange = (event) => {
    setVal(event.target.value);
  }

  const handleAdd = () => {
    let send = val;
    addDir(send);
    setVal('');
  }

  return (
    <div className={classes.root}>
      <div className={classes.headings}>
        Directions:
      </div>
      <div className={classes.body}>
        <Directions  delItem={delDir} itemList={dirList} />
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <form onSubmit={handleAdd} >
              <TextField
                id="outlined-basic"
                label="Add Direction"
                variant="standard"
                value={val}
                onChange={handleChange}
              />
            </form>
          </Grid>
          <Grid item>
            <AddCircleOutlineIcon className={classes.addBtn} onClick={handleAdd}/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
