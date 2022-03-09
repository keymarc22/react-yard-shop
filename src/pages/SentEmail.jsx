import React from 'react';
import '../styles/Login.scss'
import logo from '../assets/logo_yard_sale.svg';
import email from '../assets/email.svg';

const SentEmail = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo"/>
        <h1 className="title">Email has been sent</h1>
        <p className="subtitle">PLease check your inbox for instruccions on how to reset the password</p>

        <div className="email-image">
          <img src={email} alt="email" className="email-icon" />
        </div>

        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
}

export default SentEmail;