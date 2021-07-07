import React from 'react'
import SearchBar from "./SearchBar";

export default function AppBarLayout() {
  const appBarStyle = {
    backgroundColor: "#ffffff",
    display: "flex",
    margin: 0,
    padding: "20px 0",
  }

  const logoStyle = {
    width: "33vw",
    margin: "0 0 0 10px",
    padding: "0 2px",
    textAlign: "center",
    flex: 5,
    fontSize: "30px",
    color: "#02005D",
    fontFamily: "Pacifico",
    fontWeight: "400",
    textDecoration: "underline",
    textDecorationStyle: ""
    // borderBottom: "3px solid #02005D"


  }

  return(
    <div style={appBarStyle}>
      <div style={logoStyle}>My Recipe Book</div>
      <SearchBar />
    </div>
  )
}
