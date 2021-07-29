import React from "react";
import Direction from "./Direction"

export default function Directions({ delItem, itemList }) {
  return (
    <ol>
      {itemList.map((item, index) => (
        <Direction delItem={delItem} item={item} key={index} />
      ))}
    </ol>
  )

}
