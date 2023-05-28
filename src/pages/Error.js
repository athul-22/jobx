import React from 'react'
import error from '../images/error.svg'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <center>
        <img src={error} alt='' height='500px' width="500px"/></center>
        <center><Link to="/landing">BACK TO HOME</Link></center>
    </div>
  )
}

export default Error