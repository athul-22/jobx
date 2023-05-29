import React, { useState } from 'react'
import Logo from '../components/Logo'
import Wrapper from '../wrappers/RegisterPage'
import FormRow from '../components/FormRow'

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
            <FormRow/>
            </form>
        </Wrapper>
    )
}

export default Register