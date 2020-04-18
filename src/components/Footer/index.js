import React from 'react'
import { useLocation as location } from 'react-router-dom'

export default function Footer() {

    const { pathname } = location();
    return (
        <div>
            <footer className={pathname === '/about' ? 'page-footer font-small m-0' : 'page-footer font-small'} >
                <div className={'footer-copyright text-white text-center py-3'}> 
                    &copy; Copyright 2020
                </div>
            </footer>
        </div>
    )
}
