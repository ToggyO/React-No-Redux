import React from 'react';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';

import { Icon } from '@components/Icon';


const responseGoogle = (response, actionCreator, rest) => {
  if (response) {
    actionCreator({ token: response.tokenId, ...rest });
  }
};

const errorGoogle = (error) => {
  console.log(error.code);
  console.log(error.details);
};


const GoogleButton = ({ actionCreator, form: { values } }) => (
  <>
    <GoogleLogin
      clientId="63806648351-k2ebqg66tab5760qa4i3mmomfslbmuvd.apps.googleusercontent.com"
      render={renderProps => (
        <button
          type="button"
          className="btn google-button rounded login-page-button full_width p-4 flex justify-content-center align-items-center"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <Icon iconName="google-logo" className="mr-4"/>Continue with Google
        </button>
      )}
      onSuccess={res => responseGoogle(res, actionCreator, values)}
      onFailure={errorGoogle}
      uxMode="popup"
    />
  </>
);

export default GoogleButton;

GoogleButton.propTypes = {
  actionCreator: PropTypes.func,
  form: PropTypes.object,
};

