import React  from 'react'
import styled from 'styled-components'
import main from '../images/main.svg'
import Logo from '../components/Logo'

const Landing = () => {
    return (
        <div>
            <nav>
              <Logo/>
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

// const Wrapper = styled.main`
// nav{
//     width:var(--fluid-width);
//     width-max: var(--max-width);
//     margin :0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items:center;
// }`


export default Landing;