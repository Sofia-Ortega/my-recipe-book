import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: "20px"
  },
  logo: {

  },
  titleContainer: {
    borderTop: "2.5px solid black",
    borderBottom: "2.5px solid black",
    padding: "13px 0",
    margin: "0 200px 25px 200px"
    // backgroundColor: "#fff"
  },
  title: {
    fontFamily: "Century Gothic",
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
       <div className={classes.title}>
         {title}
       </div>
     </div>
   </div>
  )
}
