import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid"
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles( (theme) =>({
  root: {
    display: "table"
  },
  tableRow: {
    display: "table-row"
  },
  tableCell: {
    display: "table-cell"
  }
}))
export default function Ingredient({delIngr, ingr}) {
  const c = useStyles();

  const handleClick = () => {
    delIngr(ingr.id);
  }

  return (
    <div className={c.root}>
      <div className={c.tableRow}>
        <IconButton aria-label="delete" onClick={handleClick} className={c.tableCell}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <div className={c.tableCell}>{ingr.name}</div>

      </div>
    </div>
  )
}
