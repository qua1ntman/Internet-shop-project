import React, { useContext } from 'react'
import { appContext } from '../../App';
import './Login.scss'

export const Login = () => {

  const { color, backgroundColor } = useContext(appContext) as 
    { color: string, backgroundColor: string }

  return (
    <div className='login-container'>
      <div className='login-content'>
        <h1
          style={{ color }}
        >Login</h1>
        <form action=''>
          <div className='input-container'>
            <input 
              id='login_email' 
              placeholder=' ' 
            />
            <label
              htmlFor='login_email'
            >EMAIL *</label>
          </div>
          <div className='input-container'>
            <input 
              id='login_password'
              placeholder=' ' 
            />
            <label
              htmlFor='login_password'
            >PASSWORD *</label>
          </div>
          <button 
            className='default-btn'
            style={{ color: backgroundColor, backgroundColor: color }}
          >LOGIN</button>
        </form>
      </div>
    </div>
  )
}
