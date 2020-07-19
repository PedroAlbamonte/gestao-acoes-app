import React from 'react';
import { GoogleLogout } from 'react-google-login';
import history from "../../services/history";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Logout () {
    
    const onSuccess = (res) => {
        localStorage.removeItem('@GestaoAcoes/Login');
        console.log( '[Logout Success] currentUser:',  res );
        history.push('/login');
    }

    const onFailure = (res) => {
        console.log( '[Logout failed] res:',  res );
    }

    return (
        <div>
            <GoogleLogout
              clientId={clientId}
              buttonText="Sair"
              onLogoutSuccess={onSuccess}
              onFailure={onFailure}
            />
        </div>
    )
}

export default Logout;