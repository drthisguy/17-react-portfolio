import React from 'react';
import { Link, useLocation as location } from "react-router-dom";
import { Col } from "../Grid";


export default function Home() {

    const { pathname } = location();

    return (
        <Col size={'lg-6'} classes={'text-lg-right'} >
            <div className={'home-links'} >
                <Link to="/" className={pathname === '/' ? 'active' : ''}>
                    Home
                </Link>
                <Link to="/portfolio" className={pathname === '/portfolio' ? 'active' : ''}>
                    Portfolio
                </Link>
                <Link to="/about" className={pathname === '/about' ? 'active' : ''}>
                    About Me
                </Link>
                <Link to="/Resume" className={pathname === '/Resume' ? 'active' : ''}>
                    Resume
                </Link>
                <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>
                    Contact
                </Link>
            </div>
        </Col>
    )
}
