import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core/styles"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles(() => ({
  root: {
    margin: "2px 0 2px 55px"
  }
}))
export default function Ingredient({ingredient, addCheckedIngr, rmCheckedIngr}) {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  const ingrTitle = ingredient.quantity ? ingredient.quantity + " of " + ingredient.name : ingredient.name;

  const handleChange = (event) => {
    let isChecked = event.target.checked;

    if(isChecked === true) {
      addCheckedIngr(ingrTitle, ingredient.id);
    } else {
      rmCheckedIngr(ingredient.id);
    }

    setChecked(isChecked);

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
