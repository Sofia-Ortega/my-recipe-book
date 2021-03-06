import React  from 'react';
import {ipcRenderer} from "electron";
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
import Review from "./Review"

const useStyles = makeStyles( (theme) =>({
  root: {
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

  function getStepContent(stepIndex) {
    // renders correct step according to step
    switch (stepIndex) {
      case 0:
        return <TitleInput handleNext={handleNext} handleBack={handleBack}/>;
      case 1:
        return <IngrDirInput handleNext={handleNext} handleBack={handleBack}/>;
      case 2:
        return <FinalInfoInput handleNext={handleNext} handleBack={handleBack} />;
      case 3:
        return <Review handleNext={handleNext} handleBack={handleBack} />;
      default:
        return 'Unknown stepIndex';
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClick = () => {
    ipcRenderer.send("sendDataJson");
  }

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
          <div className={classes.instructions}>{getStepContent(activeStep)}</div>

        )}
      </div>
       <Link to="/" className={classes.center}>
         <Button variant="outlined" color="primary" onClick={handleClick} >
           Main Page
         </Button>
       </Link>
    </div>
  )
}
