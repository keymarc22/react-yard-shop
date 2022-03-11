import React, { useRef } from 'react';
import { Logo } from '@components/Logo';
import '@styles/Login.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data)
  }

  return (
    <div className="login">
      <div className="form-container login-page">
        <Logo />

        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" placeholder="cloraltkeymar22@gmail.com" name="email" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" placeholder="******" name="password" className="input input-password" />
          <button
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a className="forgot-password" href="/">Forgot my password</a>
        </form>

        <button
          className="secondary-button signup-button"
          type='button'
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Login;