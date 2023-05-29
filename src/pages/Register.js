import React, { useState } from 'react'
import Logo from '../components/Logo'
import Wrapper from '../wrappers/RegisterPage'
import FormRow from '../components/FormRow'
import Alert from '../components/Alert'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: true,
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
            {values.showAlert && <Alert/>}
            <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/>
            <FormRow type="email" name="email" value={values.email} handleChange={handleChange}/>
            <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>
            <button className='btn btn-block'>SUBMIT</button>
            </form>
        </Wrapper>
    )
}

export default Register