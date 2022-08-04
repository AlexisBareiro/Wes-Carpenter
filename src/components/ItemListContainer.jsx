import React from "react";
import ItemCount from "./ItemCount";

function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greetings}</h1>
            <ItemCount initial={1} stock={6}/>
        </div>
    )
}

export default ItemListContainer