import React from 'react';
import Login from '../../components/Login';
import * as AuthService from '../../services/AuthService';
import { useGoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;


export default function Loging(props) {
  const onLogoutSuccess = (res) => {
    console.log('Google logedOut');
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess
  })

  const redirect = async () => {
    
    var isLoggedIn = await AuthService.isLoggedIn();
    console.log(`isLoggedIn = ${isLoggedIn} `);
    
    if (isLoggedIn){
      props.history.push('/');
    } else {
      signOut();
      localStorage.removeItem(global.LOCALSTORAGE_LOGIN);
      alert("Usuário não autorizado. Por favor utilizar outra conta.");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <Login redirectFunction={redirect} />
      </div>
    </div>
  );
}