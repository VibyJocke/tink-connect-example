import React from 'react';
import PropTypes from 'prop-types';

const AuthorizationLink = ({
  locale,
  market,
  scope,
  ssn,
}) => {
  const ssnData = ssn ? ('&input_username=' + ssn) : '';
  const link = 'https://oauth.tink.se/0.4/authorize/?' +
    'client_id=d8486fb6c2364c3f84a0c95ac0e3f990' +
    '&redirect_uri=http://localhost:3000/callback' +
    '&scope=' + scope +
    ssnData +
    '&grant_type=authorization_code' +
    '&market=' + market +
    '&locale=' + locale +
    '&iframe=true';

  return (
    <iframe className="tink-link-iframe"
      src={link}
    />
  );
};

AuthorizationLink.propTypes = {
  ssn: PropTypes.string,
  scope: PropTypes.string.isRequired,
  market: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default AuthorizationLink;
