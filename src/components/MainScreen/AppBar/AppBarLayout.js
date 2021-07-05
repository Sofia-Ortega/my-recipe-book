import React from 'react'
import SearchBar from "./SearchBar";

export default function AppBarLayout() {
  const appBarStyle = {
    backgroundColor: "#80ffaf",
    display: "flex",
    margin: 0,
    padding: 0
  }

  const logoStyle = {
    borderBottom: "1px black solid",
    width: "33vw",
    textAlign: "center",
    flex: 1

  }

  return(
    <div style={appBarStyle}>
      <div style={logoStyle}>App bar</div>
      <SearchBar />
    </div>
  )
}
