import React, { useContext } from 'react'
import { appContext } from '../../App';

export const Main = () => {

  const { color } = useContext(appContext) as 
    { color: string }

  return (
    <div className='main-page'>
      <h2
        style={{ color }}
      >Main</h2>
    </div>
  )
}