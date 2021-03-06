import React from 'react';
import { Logo } from '@components/Logo';
import { EmailIcon } from '@components/Icons';
import '@styles/Login.scss'

const SentEmail = () => {
  return (
    <div className="login">
      <div className="form-container">
        <Logo />
        <h1 className="title">Email has been sent</h1>
        <p className="subtitle">PLease check your inbox for instruccions on how to reset the password</p>

        <div className="email-image">
          <EmailIcon />
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