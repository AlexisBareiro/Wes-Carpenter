import React, { useState } from "react";

function ItemCount(props) {
    const [count, setCount] = useState(props.initial);
    
    const handleAdd = () => {
        if (count < props.stock) setCount(count+1)
    }
    const handleRemove = () => {
        if (count > props.initial) setCount(count-1)
    }

    return (
        <>
        <h2>Contador de items</h2>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleRemove}>-</button>
        <h2>Cantidad : {count}</h2>
        </>
    )
}

export default ItemCount;