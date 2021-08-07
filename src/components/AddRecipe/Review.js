import React from "react";
import {ipcRenderer} from "electron";
import NextButton from "./NextButton";

export default function Review({handleNext, handleBack}) {
  const nextClick = () => {
    ipcRenderer.send("submit");
    handleNext();
  }

  return (
    <div>
      <div>review</div>
      <NextButton isDisabled={false} handleNext={nextClick} handleBack={handleBack} label={"Add"}/>
    </div>
  )
}
