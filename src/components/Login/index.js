import React from 'react';
import { GoogleLogin } from 'react-google-login';


const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login({ redirectFunction: RedirectFunction, ...rest }) {
    const onSuccess = (res) => {
        localStorage.setItem(global.LOCALSTORAGE_LOGIN, JSON.stringify(res));
        console.log( '[Login Success] currentUser:',  res );
        RedirectFunction();
    }

    const onFailure = (res) => {
        console.log( '[Login failed] res:',  res );
    }

    return (
        <div>
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              style={{ marginTop: '100px' }}
              isSignedIn={true}
            />
        </div>
    )
}

export default Login;