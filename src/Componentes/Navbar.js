import React from "react";
import Cartwidget from "./Cartwidget/Cartwidget";
import '../styles/Navbar.css'
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
    return(
<nav className="Navbar">
    <Link to='/'>
        <h3>Ecommerce</h3>
    </Link>
    <div className="Categorias">
        <NavLink to={`/category/celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
        <NavLink to={`/category/Tablet`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
    </div>
    <Cartwidget />
    <Navbar />
</nav>
 

    )

}

export default Navbar;

