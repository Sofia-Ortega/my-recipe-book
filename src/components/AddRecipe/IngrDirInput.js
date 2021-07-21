import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputField from "./InputField";
import IngredientInput from "./Ingredients/IngredientInput";

export default function IngrDirInput() {
  return (
    <div>
     <IngredientInput />
      <InputField title={"Direction"} />
    </div>
  )
}
