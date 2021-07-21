import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles( (theme) =>({
  root: {
    margin: "10px",
  },
  textField: {
    margin: "0 10vw",
    width: "70vw"

  }
}))
export default function InputField({title}) {
  const classes = useStyles();
  return(
    <div className={classes.root}>

      <TextField
        id="outlined-basic"
        label={title}
        variant="filled"
        className={classes.textField}
        fullWidth />
    </div>
  )
}
