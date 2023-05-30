import React, { useState } from 'react'
import Logo from '../components/Logo'
import Wrapper from '../wrappers/RegisterPage'
import FormRow from '../components/FormRow'
import Alert from '../components/Alert'
import { useAppContext } from '../context/appContext'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    
}

function Register() {

    const [values, setValues] = useState(initialState);

    const [name ,setName] = useState();
    const [email ,setEmail] = useState();
    const [pass ,setPass] = useState();


    const { isLoading, showAlert , displayAlert } = useAppContext()

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    }

    const handleChange = (e) => {
       setValues({...values, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    }

    return (
        <Wrapper className="full-page" >
            <form className='form' onSubmit={onSubmit}>
                <center><Logo /></center>
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {showAlert && <Alert />}
                {!values.isMember && (
                    <FormRow type="text" name="name" value={name}  onChange={(e) => setName(e.target.value)} />
                )}
                <FormRow type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormRow type="password" name="password" value={pass}  onChange={(e) => setPass(e.target.value)} />

                <button className='btn btn-block'>SUBMIT</button>
                <p> {values.isMember ? "Don't have an account?" : "Already have an account?"}
                    <button type='button' onClick={toggleMember} className='member-btn'>
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register