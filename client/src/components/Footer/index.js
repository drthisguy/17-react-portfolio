import React from 'react'
import { useLocation as location } from 'react-router-dom'

export default function Footer() {

    const { pathname } = location();
    return (
        <div>
            <footer style={(pathname === '/about') ? {marginTop:'0'} : {marginTop: '90px'}}
                    className={(pathname === '/') || (pathname === '/contact') ? 'page-footer font-small foot-pos': 'page-footer font-small'}>
                <div className={'footer-copyright text-white text-center py-3'}> 
                    &copy; Copyright 2020
                </div>
            </footer>
        </div>
    )
}
