import React from "react";
import Cartwidget from "./Cartwidget/Cartwidget";

export const Navbar = () => {
    return(
<div className="container">
    <nav className="nav">
        <div className= "navbrand">
            <a className="navlink" href="i0">Floreria Seralla</a>
        </div>
        <ul className="navlist">
       <li>
           <a className="navlink" href="i1">Categoria 1</a>
       </li>
       <li>
           <a className="navlink" href="li2">Categoria 2</a>
       </li>
       <li>
           <a className="navlink" href="li3">
               <Cartwidget/>
           </a>
       </li>

     </ul>

    </nav>
</div>


    )

}

export default Navbar;

