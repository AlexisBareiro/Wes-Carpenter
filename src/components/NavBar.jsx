import "./NavBar.css";
import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
    return(
        <div className="nav-bar">
            <nav className="nav-menu">
                <a className="wes" href="">Wes Carpenter</a>
                <a href="">Peliculas</a>
                <a href="">Colleción</a>
                <a href="">Documentales</a>
                <a href="">Sobre nosotros</a>
                <a><CartWidget/></a>
            </nav>
        </div>
    )
}

export default NavBar;