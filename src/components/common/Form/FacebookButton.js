import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Facebook } from '@material-ui/icons';

const FacebookButton = ({ responseFacebook }) => {
  return (
    <FacebookLogin
      // appId={process.env.REACT_APP_FACEBOOKID}
      appId={'933403190884273'}
      autoLoad={false}
      fields='name,email,picture'
      // onClick={componentClicked}
      callback={responseFacebook}
      icon={<Facebook />}
      size='small'
      cssClass='facebookBtn'
      textButton='Facebook'
    />
  );
};

export default FacebookButton;
