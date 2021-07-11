import React from 'react'
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
  root: {
    margin: "5px 55px",
    display: "flex"
  },
  stepNum: {
    fontWeight: "bold",

  }
}))

export default function Direction({step, index}) {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.stepNum}>{index}</div>
      <div>: {step}</div>
    </div>
  )
}
