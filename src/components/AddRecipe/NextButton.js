import React from 'react'
import Button from "@material-ui/core/Button";

export default function NextButton({isDisabled, handleNext, handleBack, label}) {
  const nextLabel = label ? "Add" : "Next";

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
        {nextLabel}
      </Button>
    </div>
  )
}
