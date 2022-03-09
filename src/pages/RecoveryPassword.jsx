import React from 'react';
import logo from '../assets/logo_yard_sale.svg';
const NewPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="/" className="form">
          <label for="password" className="label">Password</label>
          <input type="password" placeholder="******" id="password" className="input input-password" />

          <label for="new-password" className="label">Password</label>
          <input type="password" placeholder="******" id="new-password" className="input input-password" />

          <input type="submit" value="Confirm" className="primary-button login-button" />
        </form>
      </div>
    </div>
  )
}

export default NewPassword;