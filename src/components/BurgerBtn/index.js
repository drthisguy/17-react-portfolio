import React from 'react'
import './style.css'

export default function burgerBtn({ toggleNav }) {
    return (
        <button onclick={toggleNav} class="navbar-toggler burger-button" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent20" aria-controls="navbarSupportedContent20" aria-expanded="false"
        aria-label="Toggle navigation">
        <div class="animated-burger"><span></span><span></span><span></span></div>
      </button>
    )
}
