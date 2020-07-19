import React from 'react';
import Login from '../../components/Login';

export default function Loging(props) {
  const redirect = () => {
    props.history.push('/');
  }

  return (
    <div className="register-container">
      <div className="content">
        <Login redirectFunction={redirect} />
      </div>
    </div>
  );
}