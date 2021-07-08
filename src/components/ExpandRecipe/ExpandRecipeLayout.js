import React from 'react'
import {Link} from "react-router-dom";

export default function ExpandRecipeLayout() {
  return(
    <div>
      New recipe page
      <Link to="/">
        <button>Main page</button>
      </Link>
    </div>
  )
}
