import React, {useState, useEffect} from "react";
import {ipcRenderer} from "electron";
import NextButton from "./NextButton";
import RecipeLayout from "../Recipe/RecipeLayout";
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles({
  root: {
    fontSize: "35px",
    // textDecorationColor: "#ff8f8f"

  },
  info: {
    border: "1px solid black",
    backgroundColor: "#e3dede",
    padding: "10px",
    margin: "30px 0"
  }
})

export default function Review({handleNext, handleBack}) {
  const classes = useStyles();

  const [reviewData, setReviewData] = useState({
    // "title":"enchilladas",
    // "description":"greatest Mexican food",
    // "ingredients":[
    //   {"id":0,"name":"chicken"},
    //   {"id":1,"name":"cheese"}],
    // "steps":["cook chicken","eat cheese"],
    // "notes":"I am Moana","id":1628354456995
});
  const [haveData, setHaveData] = useState(false);
  useEffect( () => {
    ipcRenderer.on("reviewData", handleReviewData)
    return () => {
      ipcRenderer.removeListener("reviewData", handleReviewData);
    }
  })

  const handleReviewData = (event, data) => {
    // console.log("receiving data: ",  data);
    setReviewData(data);
    setHaveData(true);
  }

  const nextClick = () => {
    ipcRenderer.send("submit");
    handleNext();
  }

  if( haveData === false ) {
    return (
      <div>Loading</div>
    )
  } else {
    return (
      <div>
        <div className={classes.root}>REVIEW:</div>
        <div className={classes.info}>
          <RecipeLayout cardDat={reviewData} review={true} />
        </div>
        <NextButton isDisabled={false} handleNext={nextClick} handleBack={handleBack} label={"Add"}/>
      </div>
    )
  }
}
