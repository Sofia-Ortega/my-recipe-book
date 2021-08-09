import React from 'react'
import SearchBar from "./SearchBar";

export default function AppBarLayout() {
  const appBarStyle = {
    minWidth: "660px",
    backgroundColor: "#ffffff",
    display: "flex",
    margin: 0,
    padding: "20px 0",
  }

  const logoStyle = {
    width: "33vw",
    margin: "0",
    padding: "0",
    textAlign: "center",
    fontSize: "30px",
    color: "#02005D",
    fontFamily: "Pacifico",
    fontWeight: "400",
    minWidth: "160px",

    // borderBottom: "3px solid #02005D"


  }

  return(
    <div style={appBarStyle}>
      <div style={logoStyle}>My Recipe Book</div>
      <SearchBar />
    </div>
  )
}
