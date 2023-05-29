import React from 'react'

const FormRow = ({type,name,value,handleChange,labelText}) => {
  return (
    <div>
      <div className='form-row'>
                <label htmlFor='name' className='form-label'>
                    Name: 
                </label>
                <input
                type='text'
                value={value}
                name='name'
                onChange={handleChange}
                className='form-input'
                />
                 <label htmlFor={name} className='form-label'>
                    Email: 
                </label>
                <input
                type='text'
                value={value}
                name='name'
                onChange={handleChange}
                className='form-input'
                />
                 <label htmlFor='name' className='form-label'>
                    Password: 
                </label>
                <input
                type='password'
                value={value}
                name='name'
                onChange={handleChange}
                className='form-input'
                />
                <button className='btn btn-block'>SUBMIT</button>
            </div>
    </div>
  )
}

export default FormRow
