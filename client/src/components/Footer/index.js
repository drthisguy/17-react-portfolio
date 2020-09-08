import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Footer({ navState }) {

    const { pathname } = useLocation();
    return (
        <div>
            <footer 
                    style={!navState && (pathname === '/' || pathname === '/contact') && window.innerWidth > 768 ? {position:'absolute'} : {position:'static'}}
                    className={(pathname === '/about') ? 'page-footer font-small foot-pos' : 'page-footer font-small'}>
                <div className={'footer-copyright text-white text-center py-3'}> 
                    &copy; Copyright 2020
                </div>
            </footer>
        </div>
    )
}
