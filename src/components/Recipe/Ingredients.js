import React from 'react'
import Ingredient from "./Ingredient";

export default function Ingredients({ingrList}) {

  return (
    <div>
      {
        ingrList.map((ingr) => (
          <Ingredient ingredient={ingr} key={ingr.id} />
        ))
      }
    </div>
  )
}
