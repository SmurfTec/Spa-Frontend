import { Button } from '@material-ui/core';
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleButton = ({ classes, responseGoogle }) => {
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLECLIENTID}
      buttonText='Google'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      icon={false}
      render={(renderProps) => (
        <Button
          className={classes.googleBtn}
          variant='contained'
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          color='default'
          // startIcon={<Google />}
        >
          Google
        </Button>
      )}
    />
  );
};

export default GoogleButton;
