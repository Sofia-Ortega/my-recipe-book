import React, {useState} from 'react'
import InputField from "./InputField";
import NextButton from "./NextButton";

export default function FinalInfoInput({handleNext, handleBack}) {
  const [finalInfo, getFinalInfo] = useState("");

  const handleData = (data) => {
    getFinalInfo(data[1]);
  }

 return(
   <div>
     <InputField label={"Final notes"} handleData={handleData} value={finalInfo}/>
     <p>Total Cook time (optional)</p>
     <NextButton isDisabled={false} handleNext={handleNext} handleBack={handleBack} />

   </div>
 )


}
