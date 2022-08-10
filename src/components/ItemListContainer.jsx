import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import catalogue from "./catalogue";

function getCatalogue() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(catalogue), 1500);
    });
}

function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greetings}</h1>
            <ItemCount initial={1} stock={6}/>
            <ItemList get={getCatalogue()}/>
        </div>
    )
}

export default ItemListContainer