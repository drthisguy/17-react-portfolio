import React from 'react'

export default function burgerBtn({ toggleNav, navState }) {
    
    const btnClass = navState ? 'navbar-toggler burger-button' : 'navbar-toggler burger-button collapsed',
      burgerClass = navState ? 'animated-burger open' : 'animated-burger';
      
    return (
        <button onClick={toggleNav} className={btnClass} data-toggle="collapse" data-target="#navbar-target">
        <div className={burgerClass}><span></span><span></span><span></span></div>
      </button>
    )
}
