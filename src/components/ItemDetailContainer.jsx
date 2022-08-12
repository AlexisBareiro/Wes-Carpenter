import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [lista, setLista] = useState([]);
    const apikey = '3628b7bec66265272d61917d48d536b7';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=27`;

    useEffect(
        () => {
            fetch(url)
            .then((respuestaJson) => respuestaJson.json())
            .then((respuesta) => setLista(respuesta.results))
        },[]
    )
    
    return (
        <div>
            <h3>Kill</h3>
            {
                lista.map( (item) =>{
                    return (
                        <ItemDetail
                        key={item.id}
                        poster_path = {item.poster_path}
                        title = {item.title}
                        release_date = {item.release_date}
                        overview = {item.overview}
                      />
                    )
                })
            }
        </div>
    )
}

export default ItemDetailContainer;