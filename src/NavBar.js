import React from "react";
import './NarBar.css'
function NavBar() {
    return (
        <div>
            <nav className="navbar">
                {/*Logo */} 
                <div className="logo"><a>Apis</a></div>
                {/* MEnu de Navigaciones */}
                <ul className="nav-links">
                    {/* USING CHECKBOX HACK */}
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                    {/* AVIGATION MENUS */}
                    <div className="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Contact</a></li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;