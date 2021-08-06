import React from 'react'
import Button from "@material-ui/core/Button";

export default function NextButton({isDisabled, handleNext, handleBack}) {
  const handleClick = () => {
    console.log("next click");
    handleNext();
  }

  return (
    <div>
      <Button
        disabled={isDisabled}
        onClick={handleBack}
      >
        Back
      </Button>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Next
      </Button>
    </div>
  )
}
