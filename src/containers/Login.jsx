import React from 'react';
import '../styles/Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="form-container login-page">
        <img src="../assets/logo_yard_sale.svg" alt="logo" className="logo" />

        <form action="/" className="form">
          <label for="email" className="label">Email address</label>
          <input type="email" placeholder="cloraltkeymar22@gmail.com" id="email" className="input input-email" />
          <label for="password" className="label">Password</label>
          <input type="password" placeholder="******" id="password" className="input input-password" />
          <input type="submit" value="Log in" className="primary-button login-button" />
          <a className="forgot-password" href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Login;