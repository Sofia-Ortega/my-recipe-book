import React from 'react'
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
  root: {
    margin: "5px 0 5px 55px"
  }
}))

export default function Direction({step, index}) {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      {index}: {step}
    </div>
  )
}
