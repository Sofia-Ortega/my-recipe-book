import React, {useState} from 'react';
import {ipcRenderer} from "electron";
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

  const nextClick = () => {
    let data = {
      "title": title,
      "description": description,
    }
    ipcRenderer.send("sendAddData", data )
    handleNext();
  }

 return (
   <div>
    <InputField label={"title"} handleData={handleData} value={title}/>
    <InputField label={"description"} handleData={handleData} value={description}/>
    <NextButton isDisabled={true} handleNext={nextClick}/>
   </div>
 )
}
