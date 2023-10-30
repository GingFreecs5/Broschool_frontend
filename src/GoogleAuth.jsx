import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleAuth = ({ onSuccess, onFailure }) => {
  const responseGoogle = (response) => {
    if (response.tokenId) {
      // Google login was successful
      onSuccess(response);
    } else {
      // Google login failed
      onFailure(response);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId="981333972938-mc5g3qh2djap6iuh5vkqu1l6vqsprgc4.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleAuth;
