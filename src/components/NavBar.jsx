import React, { Component } from "react";
import '../components/NavBar.css';
import Logo from '../components/Logo/Logo';
import Nav_search from "./Logo/Nav_search";
import Nav_user from "./Logo/Nav_user";


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav_logo">
                <figure>
                <Logo className="logo_svg" />
                </figure>                
                <div className="logo_text">
                    НОВАЯ ГАЗЕТА
                </div>
            </div>

            <ul className="nav_links">
                <li className="nav_item">новости</li>
                <li className="nav_item">расследования</li>
                <li className="nav_item">репортажи</li>
                <li className="nav_item">мнения</li>
                <li className="nav_item">подкасты</li>
                <li className="nav_item">магазин</li>
            </ul>

            <div className="nav_buttons">
                <a className="nav_link__right" href="#">
                    Стать со-
                    <br />
                    участником</a>
                <button className="nav_button">
                    <Nav_search />
                </button>
                <button className="nav_button">
                    <Nav_user />
                </button>

            </div>
        </nav>)
}

export default NavBar;