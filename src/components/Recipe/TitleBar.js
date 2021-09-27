import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

  root: {
    paddingTop: "20px",
    color: "#02005D"
  },
  titleContainer: {
    minWidth: "300px"
  },
  title: {
    fontFamily: "Century Gothic",
    textAlign: "center",
    fontSize: "40px",
    display: "table",
    margin: "0 auto",
    textTransform: "uppercase",

  }
})

export default function TitleBar({title}) {
  const classes = useStyles();
  return (
   <div className={classes.root}>
     <div className={classes.titleContainer}>
       <hr />
         <div className={classes.title}>
           {title}
         </div>
       <hr />
     </div>
   </div>
  )
}
