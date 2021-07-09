import React from 'react';
import {Link} from "react-router-dom";

export default function Test() {
  return(
    <div>
      <h1>Test page</h1>
      <Link to="/">
        <button>Back to homepage</button>
      </Link>
    </div>
  )
}
