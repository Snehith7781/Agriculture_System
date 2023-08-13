import React from 'react'

export default function Regester() {
  return (
    <div className='regbody'>
    <div className='registration-form'>
    <form>
      <h1>Sign Up</h1>

      <div className="mb-3">
        <p>Id</p>
        <input type="text"  placeholder="Unique Id" />
      </div>

      <div>
        <p>Name</p>
        <input
          type="text"
          
          placeholder="First name"
        />
      </div>

      <div>
        <p>Email address</p>
        <input
          type="email"
         
          placeholder="Enter email"
        />
      </div>

      <div>
        <p>Password</p>
        <input
          type="password"
         
          placeholder="Enter password"
        />
      </div>

      <div >
        <button type="submit" >
          Sign Up
        </button>
      </div>
      <p >
        Already registered <a href="/">sign in?</a>
      </p>
    </form>
    </div>
    </div>
  )
}
