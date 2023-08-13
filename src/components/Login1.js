import React from 'react'

export default function Login1() {
    render() {
        return (
          <div>
            <div className='bbdbody' align='center'>
            <h1>
              THE BIDDING SYSTEMS
            </h1><br></br>
            <h5>A Smart Auction Initiative....</h5>
            </div>
          <div className='lbody'>
          <div className='box'>
            <span className='borderLine'></span>
            <h3>Sign In</h3>
    
           
              <div className='inputBox'>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
              <span>Email</span>
              <i></i>
            </div>
    
            <div className='inputBox'>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
              <span>Password</span>
             </div>
    
             <div className='links'>
                <a href='#'>Forget Password</a>
                <a href='/register'>Sign-Up</a>
             </div>
    
             <ReCAPTCHA sitekey="6Lf33eAlAAAAACtrImflUDnWbJLqOry4_Tg0PrIf"  />
    
            <div className='lsub'>
            <input type='submit' value='login' />
            </div>
          </div>
          </div>
          </div>
        )
      }
}
