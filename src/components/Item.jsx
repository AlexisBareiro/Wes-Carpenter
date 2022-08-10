import React from "react";

function Item({ id, title, img, writer, director, price, stock }) {
  return (
    <div>
      <div>
        <img src={img} alt="image" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>Writer: {writer} | Director: {director}</p>
        <div>
            <h3>$ {price}</h3>
            <h4>Stock :{stock}</h4>
        </div>
      </div>
    </div>
  );
}

export default Item;