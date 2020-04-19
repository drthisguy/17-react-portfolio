import React from 'react'
import { Link, useLocation as location } from 'react-router-dom'

export default function List() {
    
    const { pathname } = location();

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
                <a href={'../assets/Page Tyler_0120.pdf'} target="_blank" rel="noreferrer noopener">
                R&eacute;sum&eacute;
                </a>    
            </li>
            <li className={pathname === "/contact" ? "active" : ""}>
                <Link to="/contact">
                    Contact
                </Link>    
            </li>
        </ul>
    )
}
