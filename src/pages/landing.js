import React from 'react'
import logo from '../images/logo.svg'
import main from '../images/main.svg'

function landing() {
  return (
    <main>
        <nav>
            <img src={logo} alt="logo" className='logo'/>
        </nav>
    </main>
  )
}

export default landing