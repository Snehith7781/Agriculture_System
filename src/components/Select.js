import React from 'react'

export default function Select() {
    return (
        <div className='regbody'>
        <div className='registration-form'>
        <form>
          <div className='reggb1'>
          <h1>Book A Date</h1>
          </div>
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
              type="text"
             
              placeholder="Enter Date"
            />
          </div>
  
          <div >
            <a href='/suc2'>
              Submit
            </a>
          </div>
        </form>
        </div>
        </div>
      )
}
