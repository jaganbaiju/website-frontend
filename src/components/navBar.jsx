// import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaWhatsapp, FaBars  } from "react-icons/fa";
import "./navBar.css";


function NavaBar() {
    return (
        <div className="navbar">
            <nav className="nav-bar ">
                <div className="nav-head">
                    <h1 className="heading">
                        LOGO
                    </h1>

                    <label htmlFor="nav-open" className="navbar-icon">
                        <FaBars  className="navbar-icon" />
                    </label>
                </div>
                <div className="nav-items-div">
                    <input type="checkbox" id="nav-open" style={{display: "none"}}  />
                    <ul className="nav-items">
                        <li className="item navitem"><a href="/">Home</a></li>
                        <li className="item navitem"><a href="/">CodeWorks</a></li>
                        <li className="item dropdown navitem">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu" id="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="item navitem"><a href="/">Our Tean</a></li>
                        <li className="item contact"><a href="/">Contact Us <FaWhatsapp size={16} color="#FFFFFF" className="whatsapp-icon" /></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavaBar;