import React from 'react';
import img from '@images/404_error.svg';
import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className='notfound-page'>
      <div className='error-info'>
        <h1>Opps!!</h1>
        <h1>Apparently you got lost</h1>
        <br />
        <button className="warning-button signup-button w-100">Take me back</button>
      </div>
      <div className='w-100'>
        <figure>
          <img 
            src={img}
            alt='404-error'
            className='404Error'
          />
        </figure>
      </div>
    </div>
  );
}

export default NotFound;