import React, {useState} from 'react';
import {ipcRenderer} from "electron";
import InputField from "./InputField";
import NextButton from "./NextButton";

export default function FinalInfoInput({handleNext, handleBack}) {
  const [notes, getNotes] = useState("");

  const handleData = (data) => {
    getNotes(data[1]);
  }

  const nextClick = () => {
    let data = {
      notes: notes
    }
    ipcRenderer.send("sendAddData", data);
    ipcRenderer.send("sendReviewData");
    handleNext();
  }

 return(
   <div>
     <InputField label={"Final notes"} handleData={handleData} value={notes}/>
     <NextButton isDisabled={false} handleNext={nextClick} handleBack={handleBack} />
   </div>
 )


}
