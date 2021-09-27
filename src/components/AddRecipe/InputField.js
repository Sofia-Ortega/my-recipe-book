import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles( (theme) =>({
  root: {
    margin: "20px 10px",
  },
  textField: {
    // margin: "0 10vw",
    // width: "30vw"
    width: "50%",
    margin:"0 auto"

  }
}))
export default function InputField({label, handleData, value}) {
  const title = label.charAt(0).toUpperCase() + label.slice(1);

  const handleChange = (event) => {
    handleData([label, event.target.value]);
  }

  const classes = useStyles();
  return(
    <div className={classes.root}>
      <TextField
        id="outlined-basic"
        label={title}
        variant="standard"
        value={value}
        onChange={handleChange}
        className={classes.textField}
      />
    </div>
  )
}
