import React from 'react'

export default function burgerBtn({ toggleNav, navState }) {
    
    const btnClass = navState ? 'navbar-toggler burger-button collapsed' : 'navbar-toggler burger-button',
      burgerClass = navState ? 'animated-burger' : 'animated-burger open';
      
    return (
        <button onClick={toggleNav} className={btnClass} type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent20" aria-controls="navbarSupportedContent20" aria-expanded="false"
        aria-label="Toggle navigation">
        <div className={burgerClass}><span></span><span></span><span></span></div>
      </button>
    )
}
