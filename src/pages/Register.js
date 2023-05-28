import React, { useState } from 'react'
import Logo from '../components/Logo'
import Wrapper from '../wrappers/RegisterPage'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

function Register() {

    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        console.log(e.target)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    }

    return (
        <Wrapper className="full-page" >
            <form className='form' onSubmit={onSubmit}>
           <center><Logo /></center> 
            <h3>Login</h3>
            <div className='form-row'>
                <label htmlFor='name' className='form-label'>
                    Name: 
                </label>
                <input
                type='text'
                value={values.name}
                name='name'
                onChange={handleChange}
                className='form-input'
                />
                <button className='btn btn-block'>SUBMIT</button>
            </div>
            </form>
        </Wrapper>
    )
}

export default Register