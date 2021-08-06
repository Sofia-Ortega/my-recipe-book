import React from "react";
import NextButton from "./NextButton";

export default function Review({handleNext, handleBack}) {
  return (
    <div>
      <div>review</div>
      <NextButton isDisabled={false} handleNext={handleNext} handleBack={handleBack} label={"Add"}/>
    </div>
  )
}
