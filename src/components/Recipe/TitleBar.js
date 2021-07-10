import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: "20px"
  },
  logo: {

  },
  titleContainer: {
    borderTop: "1px solid #02005D",
    borderBottom: "1px solid #02005D",
    padding: "30px 0",
    // backgroundColor: "#fff"
  },
  title: {
    fontFamily: "Comfortaa",
    fontSize: "35px",
    display: "table",
    margin: "0 auto",
    textTransform: "uppercase",
    color: "#02005D",

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
