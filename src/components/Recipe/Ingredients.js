import React from 'react'
import Ingredient from "./Ingredient";


export default function Ingredients({ingrList, checkBoxChange}) {
  return (
  <div>
    <div>
      {
        ingrList.map((ingr) => (
          <Ingredient ingredient={ingr} key={ingr.id} checkBoxChange={checkBoxChange} />
        ))
      }
    </div>
  </div>
  )
}
