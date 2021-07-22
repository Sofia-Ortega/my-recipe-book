import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Ingredients from "./Ingredients"
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles( (theme) =>({
  headings: {
    fontFamily: "Bodoni MT",
    fontSize: "28px",
    marginLeft: "15px",
  },
}))

export default function IngredientInput() {
  const classes = useStyles();

  const [value, setValue] = useState("")
  const [ingrList, setIngrList] = useState([
    {'name': "chicken", 'id': 0},
    {'name': 'cheese', 'id': 1},
  ]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const logAll = () => {
    console.log(ingrList);
  }

  function addIngr() {
    setValue('');
    let data = {
      'name': value,
      'id': ingrList.length
    }
    setIngrList([...ingrList, data])

  }

   const delIngr = (id) => {
    setIngrList(ingrList.filter((ingr) => ingr.id !== id))
  }


  return (
    <div>
      <div className={classes.headings}>
        Ingredients:
      </div>
      <Ingredients  delIngr={delIngr} ingrList={ingrList}  />

        <TextField
          id="outlined-basic"
          label="Add Ingredient"
          variant="standard"
          value={value}
          onChange={handleChange}
        />
         <Button variant="outlined" color="primary" size="small" onClick={addIngr}>
           Add
         </Button>
      <div>
        <Button variant="contained" color="primary" onClick={logAll}>Log all</Button>
      </div>


    </div>
  )
}
