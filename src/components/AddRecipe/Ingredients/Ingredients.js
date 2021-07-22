import React from "react";
import Ingredient from "./Ingredient"

export default function IngredientInput({ delIngr, ingrList}) {
  return (
    <div>
      {ingrList.map(ingr => (
        <Ingredient  delIngr={delIngr} ingr={ingr} key={ingr.id}/>
      ))}
    </div>
  )
}
