import React, {useState, useEffect} from "react";
import {ipcRenderer} from "electron";
import NextButton from "./NextButton";
import RecipeLayout from "../Recipe/RecipeLayout";

export default function Review({handleNext, handleBack}) {

  const [reviewData, setReviewData] = useState({
    "title":"enchilladas",
    "description":"greatest Mexican food",
    "ingredients":[
      {"id":0,"name":"chicken"},
      {"id":1,"name":"cheese"}],
    "steps":["cook chicken","eat cheese"],
    "notes":"I am Moana","id":1628354456995
});
  const [haveData, setHaveData] = useState(false);
  // useEffect( () => {
  //   ipcRenderer.on("reviewData", handleReviewData)
  //   return () => {
  //     ipcRenderer.removeListener("reviewData", handleReviewData);
  //   }
  // })

  const handleReviewData = (event, data) => {
    console.log("receiving data: ",  data);
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
        <div>Review:</h1>
        <RecipeLayout cardDat={reviewData}/>
        <NextButton isDisabled={false} handleNext={nextClick} handleBack={handleBack} label={"Add"}/>
      </div>
    )
  }
}
