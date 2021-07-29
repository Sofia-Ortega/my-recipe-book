import React from "react";
import Item from "./Item"

export default function Items({ delItem, itemList}) {
  return (
    <div>
      {itemList.map((item, index) => (
        <Item delItem={delItem} item={item} key={index} />
      ))}
    </div>
    )

}
