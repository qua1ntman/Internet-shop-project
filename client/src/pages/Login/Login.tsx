import React, { SetStateAction, useContext } from 'react'
import { appContext } from '../../App';
import { themeTextChanger } from '../../helpers/themeStyleChanger';

export const Login = () => {

  const { theme } = useContext(appContext) as 
    { theme: string; setTheme: React.Dispatch<SetStateAction<string>>; }

  return (
    <div className='login-container'>
      <h1
        style={themeTextChanger(theme)}
      >Log in</h1>
      <form action=''>
        <div>
          <label
            style={themeTextChanger(theme)}
          >Email<input type='text' /></label>
        </div>
        <div>
          <label
            style={themeTextChanger(theme)}
          >Password<input type='text' /></label>
        </div>
      </form>
    </div>
  )
}
