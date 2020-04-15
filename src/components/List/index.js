import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function List() {
    
    const { pathname } = useLocation();

    return (
        <ul className="custom-menu">
            <li className={pathname === "/" ? "active" : ""}>
                <Link to="/">
                    Home
                </Link>    
            </li>
            <li className={pathname === "/portfolio" ? "active" : ""}>
                <Link to="/portfolio">
                    Portfolio
                </Link>    
            </li>
            <li className={pathname === "/about" ? "active" : ""}>
                <Link to="/about">
                    About
                </Link>    
            </li>
            <li className={pathname === "/resume" ? "active" : ""}>
                <Link to="/resume">
                R&eacute;sum&eacute;
                </Link>    
            </li>
            <li className={pathname === "/contact" ? "active" : ""}>
                <Link to="/contact">
                    Contact
                </Link>    
            </li>
        </ul>
    )
}
