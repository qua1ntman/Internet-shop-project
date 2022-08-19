
import React, { useContext } from 'react'
import { appContext } from '../../App';

export const Cart = () => {

  const { backgroundColor } = useContext(appContext) as 
    { backgroundColor: string }

  return (
    <div className='cart-page'>
      <h2
        style={{ backgroundColor }}
      >Cart</h2>
    </div>
  )
}