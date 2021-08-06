import React, {useState} from 'react'
import InputField from "./InputField";
import NextButton from "./NextButton";


export default function TitleInput({handleNext}) {
  const [title, getTitle] = useState("");
  const [description, getDescription] = useState("");

  const handleData = (data) => {
    if(data[0] === "title") {
      getTitle(data[1]);
    }
    else if (data[0] === "description") {
     getDescription(data[1]);
    }
  }

 return (
   <div>
    <InputField label={"title"} handleData={handleData} value={title}/>
    <InputField label={"description"} handleData={handleData} value={description}/>
    <NextButton isDisabled={true} handleNext={handleNext}/>
   </div>
 )
}
