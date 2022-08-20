import React, { useContext, useRef } from 'react'
import { appContext } from '../../App';

export const Register = () => {

  // Ссылки на инпуты 
  const firstNameRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const secondNameRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const phoneRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const repeatPasswordRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const { color, backgroundColor } = useContext(appContext) as 
    { color: string, backgroundColor: string }
  
  // const [isFormValid, setIsFormValid] = useState<Boolean>(false)

  // function isNormEmail(): boolean {
  //   return /\S+@\S+\.\S+/.test(emailRef.current.value)
  // }

  return (
    <div className='register-container'>
      <div className="register-content">
        <h1
          style={{ color }}
        >Sign up</h1>
        <form action=''>
          <div className='input-container'>
            <input id='first_name' ref={firstNameRef} type='text' placeholder=' ' />
            <label
              htmlFor='first_name'
            >FIRST NAME *</label>
          </div>
          <div className='input-container'>
            <input id='second_name' ref={secondNameRef} type='text' placeholder=' ' />
            <label
              htmlFor='second_name'
            >SECOND NAME *</label>
          </div>
          <div className='input-container'>
            <input id='register_email' ref={emailRef} type='text' placeholder=' ' />
            <label
              htmlFor='register_email'
            >EMAIL *</label>
          </div>
          <div className='input-container'>
            <input id='phone' type='text' ref={phoneRef} placeholder=' ' />
            <label
              htmlFor='phone'
            >PHONE *</label>
          </div>
          <div className='input-container'>
            <input id='register_password' ref={passwordRef} type='text' placeholder=' ' />
            <label
              htmlFor='register_password'
            >PASSWORD *</label>
          </div>
          <div className='input-container'>
            <input id='register_password_repeat' ref={repeatPasswordRef} type='text' placeholder=' ' />
            <label
              htmlFor='register_password_repeat'
            >REPEAT PASSWORD *</label>
          </div>
          <button 
              className='default-btn'
              style={{ color: backgroundColor, backgroundColor: color }}
            >REGISTER</button>
        </form>
      </div>
    </div>
  )
}
