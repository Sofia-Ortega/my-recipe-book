import React, {useState} from 'react'
import InputField from "./InputField";

export default function FinalInfoInput() {
  const [finalInfo, getFinalInfo] = useState("");

  const handleData = (data) => {
    getFinalInfo(data[1]);
  }

 return(
   <div>
     <InputField label={"Final notes"} handleData={handleData} value={finalInfo}/>
     <p>Total Cook time (optional)</p>

   </div>
 )


}
