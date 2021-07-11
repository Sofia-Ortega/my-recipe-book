import React from 'react'
import Direction from "./Direction";

export default function Directions({stepList}) {

  return (
    <div>
      {
        stepList.map((step, index)=> (
          <Direction step={step} key={index} index={index + 1}/>
        ))
      }
    </div>
  )
}
