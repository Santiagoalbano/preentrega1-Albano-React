import React from "react";
import Cartwidget from "./Cartwidget/Cartwidget";
import '../styles/Navbar.css'
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
    return(
<nav className="Navbar">
    <Link to='/'>
        <h3>Floreria Sorella</h3>
    </Link>
    <div className="Categorias">
        <NavLink to={`/category/Hibrida`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hibrida</NavLink>
        <NavLink to={`/category/Realeza`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Realeza</NavLink>
    </div>
    <Cartwidget />
    <Navbar />
</nav>
 

    )

}

export default Navbar;

