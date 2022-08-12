import React from "react";

function ItemDetail({ id, title, poster_path, overview, release_date }) {
  return (
    <div>
      <div>
        <img src=´https://image.tmdb.org/t/p/w500/${poster_path}´ alt="image" 
        />
      </div>
      <div>
        <h2>{title}</h2>
        <div>
            <h4>Release date :{release_date}</h4>
            <h4>Overview : {overview}</h4>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;