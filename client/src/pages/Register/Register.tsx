import React, { SetStateAction, useContext } from 'react'
import { appContext } from '../../App';
import { themeTextChanger } from '../../helpers/themeStyleChanger';

export const Register = () => {

  const { theme } = useContext(appContext) as 
    { theme: string; setTheme: React.Dispatch<SetStateAction<string>>; }

  return (
    <div className='register-container'>
      <h1
        style={themeTextChanger(theme)}
      >Sign up</h1>
      <form action=''>
        <div>
          <label
            style={themeTextChanger(theme)}
          >First name<input type='text' /></label>
        </div>
        <div>
          <label
            style={themeTextChanger(theme)}
          >Second name<input type='text' /></label>
        </div>
        <div>
          <label
            style={themeTextChanger(theme)}
          >Email<input type='text' /></label>
        </div>
        <div>
          <label
            style={themeTextChanger(theme)}
          >Phone<input type='text' /></label>
        </div>
        <div>
          <label
            style={themeTextChanger(theme)}
          >Password<input type='text' /></label>
        </div>
        <div>
          <label
            style={themeTextChanger(theme)}
          >Repeat password<input type='text' /></label>
        </div>
      </form>
    </div>
  )
}
