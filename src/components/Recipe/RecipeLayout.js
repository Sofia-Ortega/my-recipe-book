import React from 'react'
import {Link} from "react-router-dom";

export default function RecipeLayout({cardDat}) {

  const layoutStyle = {
    backgroundColor: "#f5f5f5",
    height: "100vh"
  }

  const appBarStyle = {
    backgroundColor: "#ffffff"
  }

  const logoStyle = {
    display: "table",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "40px",
    color: "#02005D",
    fontFamily: "Pacifico",
    fontWeight: "400",
  }

  const bottomLineStyle = {
    margin: "0 30vw",
    paddingBottom: "10px",
    borderTop: "3px solid #02005D",
  }

  return(
    <div style={layoutStyle}>
      <div style={appBarStyle}>
        <div style={logoStyle}>My Recipe Book</div>
        <div style={bottomLineStyle}></div>
      </div>
      <div>
        <div>
          {cardDat.title}
        </div>
        <div>
          Description: {cardDat.description}
        </div>
        <div>
          Ingredients:


        </div>
        <div>
          Directions:
        </div>
        <div>
          Notes: {cardDat.notes}
        </div>
        <Link to="/">
          <button>Go to main page</button>
        </Link>
      </div>

    </div>
  )
}
