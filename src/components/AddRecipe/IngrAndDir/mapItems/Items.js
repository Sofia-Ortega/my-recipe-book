import React from "react";
import Item from "./Item"


export default function Items({ delItem, itemList, numbered}) {
  if(numbered) {
    return (
      <div>
        {itemList.map((item) => (
          <Item delItem={delItem} item={item} key={item.id}/>
        ))}
      </div>
    )
  }
  else {

    return (
      <div>
        {itemList.map((item, index) => (
          <div>
            <div>how are you</div>
            <Item delItem={delItem} item={item} key={item.id} />
          </div>
        ))}
      </div>
    )
  }
}
