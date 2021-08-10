import React, {useState} from 'react'
import Ingredient from "./Ingredient";



export default function Ingredients({ingrList, addCheckedIngr, rmCheckedIngr}) {
  const handleClick = () => {
    console.log(ingrList)
  }

  return (
  <div>

    {/*<button onClick={handleClick}>Ingr List</button>*/}
    <div>
      {
        ingrList.map((ingr) => (
          <Ingredient ingredient={ingr} key={ingr.id} addCheckedIngr={addCheckedIngr} rmCheckedIngr={rmCheckedIngr}/>
        ))
      }
    </div>
  </div>
  )
}
