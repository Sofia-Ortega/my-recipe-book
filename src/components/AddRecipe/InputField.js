import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function InputField({title}) {

  return(
    <div>

      <TextField id="outlined-basic" label={title} variant="outlined" />
    </div>
  )
}
