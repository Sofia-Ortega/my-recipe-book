import React, {useState} from 'react'
import InputField from "./InputField";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function TitleInput() {
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
   </div>
 )
}
