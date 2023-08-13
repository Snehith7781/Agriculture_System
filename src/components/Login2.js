import React, { Component } from 'react'
import ReCAPTCHA from "react-google-recaptcha";


export default class Login extends Component {



  render() {
    return (
      <div className='lbackground-image'>
        <div className='bbdbody' align='center'>
        <h1>
          FARM EASY
        </h1><br></br>
        <h5>....A Smart Farmer Initiative....</h5>
        </div>
      <div className='lbody'>
      <div className='box'>
        <span className='borderLine'></span>
      <form>
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
          <span></span>
         </div>

         <div className='links'>
            <a href='/forget'>Forget Password</a>
            <a href='/register'>Sign-Up</a>
         </div>

         <ReCAPTCHA sitekey="6Lf33eAlAAAAACtrImflUDnWbJLqOry4_Tg0PrIf"  /> 

        <div >
        <a href='/home'>LOGIN</a>
        </div>
      </form>
      </div>
      </div>
      </div>
    )
  }
}