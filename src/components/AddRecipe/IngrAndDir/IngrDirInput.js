import React, {useState} from 'react';
import IngredientInput from "./IngredientInput";
import DirectionInput from "./DirectionInput";
import NextButton from "../NextButton";

export default function IngrDirInput({handleNext, handleBack}) {
  const [dirList, setDirList] = useState([
    {'name': "cook chicken", 'id': 0},
    {'name': 'eat cheese', 'id': 1},
  ]);

  function addDir(dirVal) {
    if(dirVal === '') return;

    let data = {
      'name': dirVal,
      'id': Date.now()
    }

    //update and rest
    setDirList([...dirList, data])

  }

  const delDir = (id) => {
    setDirList(dirList.filter((dir) => dir.id !== id))

  }
  return (
    <div >
      <IngredientInput />
      <DirectionInput addDir={addDir} delDir={delDir} dirList={dirList}/>
      <NextButton isDisabled={false} handleNext={handleNext} handleBack={handleBack}/>
    </div>
  )
}
