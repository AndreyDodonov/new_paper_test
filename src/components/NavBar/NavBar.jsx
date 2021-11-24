import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../NavBar/NavBar.css';
import Logo from '../Logo/Logo';
import Nav_search from "../Logo/Nav_search";
import Nav_user from "../Logo/Nav_user";
import { Routes, Route } from "react-router-dom";
import ChartsPage from "../../pages/ChartsPage/ChartsPage";


const NavBar = () => {



    return (


        <nav className="navbar">
            <div className="nav_logo">
                <figure className="logo_figure">
                    <Logo className="logo_svg" />
                </figure>
                <div className="logo_text">
                    НОВАЯ ГАЗЕТА
                </div>
            </div>

            <ul className="nav_links">
                <li className="nav_item"> <Link className="link" to="/"> новости</Link></li>
                <li className="nav_item"><Link className="link" to="/chartsPage"> графики</Link></li>
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