import React from 'react'
import { useAppContext } from '../context/appContext'

function Alert(){
  const {alertType,alert} = useAppContext();
  return <div className={`alert alert-${alertType}`}>{Alert}</div>
}

export default Alert