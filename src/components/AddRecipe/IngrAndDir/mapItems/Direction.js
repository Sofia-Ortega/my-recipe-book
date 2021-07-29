import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid"
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles( (theme) =>({
  root: {
    margin: "10px 0 10px 0",
    // backgroundColor: "violet"
  },
  icon: {
    padding: 0,
    margin: 0
  },
  name: {
    paddingLeft: "15px"
  }

}))
export default function Direction({delItem, item, index}) {
  const c = useStyles();

  const handleClick = () => {
    delItem(item.id);
  }

  return (
    <div className={c.root}>

      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <IconButton aria-label="delete" onClick={handleClick} className={c.icon}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item>
          <div className={c.name} >
            <li>{item.name}</li>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
