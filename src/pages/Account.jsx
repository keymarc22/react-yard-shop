import React from 'react';

const Account = () => {
  return(
    <div className="login">
      <div className="form-container form-container-edit">
        <h1 className="title-account">My account</h1>
        <form action="/" className="form form-edit">
          <div className="form-inputs">
            <label for="name" className="label">Name</label>
            <p className="value">Keymar Cloralt</p>
    
            <label for="email" className="label">Email address</label>
            <p className="value"> cloraltkeymar22@gmail.com </p>
    
            <label for="password" className="label">Password</label>
            <p className="value">******</p>
          </div>

          <input type="submit" value="Edit" className="secondary-button" />
        </form>
      </div>
    </div>
  )
}

export { Account };