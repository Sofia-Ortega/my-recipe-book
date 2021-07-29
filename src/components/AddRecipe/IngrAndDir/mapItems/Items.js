import React from "react";
import Item from "./Item"

export default function Items({ delItem, itemList, numbered}) {
  return (
    <div>
      {itemList.map((item) => (
        <div>
          <Item delItem={delItem} item={item} key={item.id + 4} />
        </div>
      ))}
    </div>
    )

}
