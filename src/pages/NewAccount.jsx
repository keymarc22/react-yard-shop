import React from 'react';

const Register = () => {
  return (
    <div className="login">
      <div className="form-container form-container-edit">
        <h1 className="title-account">My account</h1>
        <form action="/" className="form form-edit">
          <div className="form-inputs">
            <label for="name" className="label">Name</label>
            <input type="text" placeholder="Full name" id="name" className="input input-name" />

            <label for="email" className="label">Email address</label>
            <input type="email" placeholder="cloraltkeymar22@gmail.com" id="email" className="input input-email-edit" />

            <label for="password" className="label">Password</label>
            <input type="password" placeholder="******" id="password" className="input input-password-edit" />
          </div>

          <input type="submit" value="Create" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
}

export default Register;