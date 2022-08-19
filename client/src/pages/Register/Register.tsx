import React from 'react'

export const Register = () => {
  return (
    <div>
      <div>
        <h1>Sign up</h1>
        <form action=''>
          <div>
            <label>First name<input type='text' /></label>
          </div>
          <div>
            <label>Second name<input type='text' /></label>
          </div>
          <div>
            <label>Email<input type='text' /></label>
          </div>
          <div>
            <label>Phone<input type='text' /></label>
          </div>
          <div>
            <label>Password<input type='text' /></label>
          </div>
          <div>
            <label>Repeat password<input type='text' /></label>
          </div>
        </form>
      </div>
    </div>
  )
}
