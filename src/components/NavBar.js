import React from "react";
import {NavLink} from 'react-router-dom'
import '../styles/navs.css'

//routers
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';




function NavBar() {
    return (
        <div>
            <nav className="navbar">
                {/*Logo */} 
                <div className="logo"><a>Apis</a></div>
                {/* NAVIGATIONS MENU */}
                <ul className="nav-links">
                    {/* USING CHECKBOX HACK */}
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                    {/* NAVIGATION MENUS */}
                    <div className="menu">
                        <li><NavLink to="/" className="a">Home</NavLink></li>
                        <li><NavLink to="/about" className="a">About</NavLink></li>
                        <li><NavLink to="/contact" className="a">Contact</NavLink></li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;