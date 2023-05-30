import React from 'react'
import { useAppContext } from '../context/appContext'

function Alert(){
  const {alertType,alert} = useAppContext();
  return (
    <div className='alert alert-success'>Alert goes here</div>
  )
}

export default Alert