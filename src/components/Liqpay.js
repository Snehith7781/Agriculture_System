import React from 'react'

export default function Liqpay() {
    return (
        <>

        <div className='bulbtext'><h3 align='center'>Payment For Liquid Manure</h3></div>
        <form  className="checkout-form">
          <div className="form-group">
            <label className="form-label">
              Name on Card
              <input
                type="text"
                name="name"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              Card Number
              <input
                type="text"
                name="cardNumber"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              Expiration Date
              <input
                type="text"
                name="expiration"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              CVV
              <input
                type="text"
                name="cvv"
                className="form-input"
              />
            </label>
          </div>
          <a href="/paysuc" className="button-link">Pay-Now</a>
        </form>
        </>
      )
}
