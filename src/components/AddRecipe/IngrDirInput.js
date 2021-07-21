import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputField from "./InputField";

export default function IngrDirInput() {
  return (
    <div>
      <InputField title={"Ingredients"} />
      <InputField title={"Direction"} />
    </div>
  )
}
