import React, {useState} from 'react';
import {ipcRenderer} from "electron";
import IngredientInput from "./IngredientInput";
import DirectionInput from "./DirectionInput";
import NextButton from "../NextButton";

export default function IngrDirInput({handleNext, handleBack}) {

  const [ingrList, setIngrList] = useState([
    {'name': "chicken", 'id': 0},
    {'name': 'cheese', 'id': 1},
  ]);
  const [dirList, setDirList] = useState([
    {'name': "cook chicken", 'id': 0},
    {'name': 'eat cheese', 'id': 1},
  ]);

  function nextClick() {
    let data = {
      "ingredients": ingrList,
      "steps": dirList
    }
    ipcRenderer.send("sendAddData", data);
    handleNext();
  }

  function addDir(dirVal) {
    if(dirVal === '') return;

    let data = {
      'name': dirVal,
      'id': Date.now()
    }

    //update and rest
    setDirList([...dirList, data])

  }

  function addIngr(val) {
    if(val === "") return;
    let data = {
      'name': val,
      'id': Date.now()
    }

    setIngrList([...ingrList, data])
  }

  const delDir = (id) => {
    setDirList(dirList.filter((dir) => dir.id !== id))

  }

  const delIngr = (id) => {
    setIngrList(ingrList.filter((ingr) => ingr.id !== id))
  }
  return (
    <div >
      <IngredientInput addIngr={addIngr} delIngr={delIngr} ingrList={ingrList}/>
      <DirectionInput  addDir={addDir} delDir={delDir} dirList={dirList}/>
      <NextButton isDisabled={false} handleNext={nextClick} handleBack={handleBack}/>
    </div>
  )
}
