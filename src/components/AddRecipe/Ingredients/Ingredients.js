import React from "react";
import Ingredient from "./Ingredient"

export default function IngredientInput({addIngr, delIngr, ingrList}) {
  return (
    <div>
      {ingrList.map(ingr => (
        <Ingredient addIngr={addIngr} delIngr={delIngr} ingr={ingr} key={ingr.id}/>
      ))}
    </div>
  )
}
