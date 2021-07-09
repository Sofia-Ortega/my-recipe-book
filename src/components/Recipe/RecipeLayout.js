import React, {useState} from 'react'
import {Link} from "react-router-dom";
import data from "../../../data.json"

export default function RecipeLayout({cardDat}) {
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }


  return(
    <div>
      <div>
        My Recipe Book
      </div>
      <div>
        {cardDat.title}
      </div>
     <div>
       Description:
     </div>
     <div>
       Ingredients:

     </div>
     <div>
       Directions:
     </div>
     <div>
       Notes:
     </div>
      <Link to="/">
        <button>Go to main page</button>
      </Link>
    </div>
  )
}
