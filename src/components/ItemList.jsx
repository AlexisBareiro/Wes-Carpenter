import React, { useEffect, useState } from "react";
import Item from "./Item";

function ItemList(prop) {
    const[item, setItem] = useState([]);

    useEffect(() => {
        prop.get.then((catalogue) => {
            setItem(catalogue);
        })
    }, [])

    return (
        <div>
            {item.map((item) => {
            return (
              <Item
                key={item.id}
                img = {item.img}
                title = {item.title}
                writer = {item.writer}
                director = {item.director}
                price = {item.price}
                stock = {item.stock}
              />
            );
          })}
        </div>
    )
}

export default ItemList