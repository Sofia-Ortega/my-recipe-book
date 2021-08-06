import React from 'react'
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

import IngrDirInput from "./IngrAndDir/IngrDirInput";
import FinalInfoInput from "./FinalInfoInput";
import TitleInput from "./TitleInput";

const useStyles = makeStyles( (theme) =>({
  root: {
    //width: '100%',
    margin: "30px"
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    fontSize: "40px",
    margin: "0 200px",
    textAlign: "center",
  },
  center: {
    display: "table",
    margin: "0 auto"
  }
}));

function getSteps() {
  return ['Title', 'Ingredients & Directions', 'Final notes', 'Review'];
}




export default function AddLayout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const test = () => {
    console.log("Test was a success")
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <TitleInput handleNext={handleNext}/>;
      case 1:
        return <IngrDirInput />;
      case 2:
        return <FinalInfoInput />;
      case 3:
        return "Review"
      default:
        return 'Unknown stepIndex';
    }
  }
  const handleNext = () => {

    if(activeStep + 1 === steps.length) {
      console.log("Add");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        Add Recipe
      </div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="secondary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Add' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
       <Link to="/">
         <Button variant="outlined" color="primary" className={classes.center}>
           Main Page
         </Button>
       </Link>
    </div>
  )
}
