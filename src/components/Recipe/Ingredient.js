import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core/styles"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles(() => ({
  root: {
    margin: "5px 0 5px 55px"
  }
}))
export default function Ingredient({ingredient}) {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  const ingrTitle = ingredient.quantity + " of " + ingredient.name

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return(
    <div className={classes.root}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label={ingrTitle}
      />
    </div>
  )
}
