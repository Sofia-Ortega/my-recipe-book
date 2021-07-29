import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Directions from "./mapItems/Directions"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Grid from "@material-ui/core/Grid"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) =>({
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

export default function DirectionInput() {
  const classes = useStyles();

  const [value, setValue] = useState("")
  const [dirList, setDirList] = useState([
    {'name': "cook chicken", 'id': 0},
    {'name': 'eat cheese', 'id': 1},
  ]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  function addDir() {
    if(value === '') return;
    let name = value;
    let data = {
      'name': name,
      'id': dirList.length
    }

    //update and rest
    setDirList([...dirList, data])
    setValue('');

  }

  const delDir = (id) => {
    setDirList(dirList.filter((dir) => dir.id !== id))
  }


  return (
    <div>
      <div className={classes.headings}>
        Directions:
      </div>
      <div className={classes.body}>
        <Directions  delItem={delDir} itemList={dirList} />
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <form onSubmit={addDir} >
              <TextField
                id="outlined-basic"
                label="Add Direction"
                variant="standard"
                value={value}
                onChange={handleChange}
              />
            </form>
          </Grid>
          <Grid item>
            <AddCircleOutlineIcon className={classes.addBtn} onClick={addDir}/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
