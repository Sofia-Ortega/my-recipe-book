import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid"
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles( (theme) =>({
  root: {
    margin: "10px 0",
    // backgroundColor: "white"
  },
  icon: {
    padding: 0,
    margin: 0
  }

}))
export default function Item({delItem, item}) {
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
          {item.name} -- {item.id}
        </Grid>
      </Grid>
    </div>
  )
}
