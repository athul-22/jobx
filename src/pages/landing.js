import React  from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import main from '../images/main.svg'

const Landing = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="logo" className='logo' />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        Job <span> Tracking </span> App
                    </h1>
                    <p>
                        Job tracking gives you access to accurate and timely performance data that allows you to understand if you have the right resources assigned to specific tasks.
                    </p>
                    <button className='btn btn-hero'>Login / Register</button>
                </div>
                <img src={main} className='img main-img' alt='main'/>
            </div>
        </div>
    )
}


export default Landing;