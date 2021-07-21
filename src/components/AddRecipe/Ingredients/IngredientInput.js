import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Ingredients from "./Ingredients"


export default function IngredientInput() {
  const [ingrList, setIngrList] = useState([
    {'name': "chicken", 'id': 1},
    {'name': 'cheese', 'id': 2},
  ]);

  function addIngr(data) {
    data.id = ingrList.length();
    setIngrList(...ingrList, data)

  }

  function delIngr(id) {
    setIngrList(ingrList.filter((ingr) => ingr.id !== id))
  }


  return (
    <div>
      <Ingredients addIngr={addIngr} delIngr={delIngr} ingrList={ingrList}  />
      <form action={addIngr()} id={"ingrForm"}>
        <TextField
          id="outlined-basic"
          label="Add Ingredient"
          variant="standard"
        />
      </form>
      <button type="submit" form="ingrForm" value="Submit">Submit</button>

    </div>
  )
}
