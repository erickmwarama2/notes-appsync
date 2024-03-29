import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'us-east-2',
    userPoolId: 'us-east-2_E9KBF24sD',
    identityPoolId: 'us-east-2:4020e324-2d9a-46e6-9ac7-7caecf3a9067',
    userPoolWebClientId: '5n5qfh3h5nmgrgtj0cqrkrj8ts',
    mandatorySignIn: false,
  }
});

Amplify.configure({
  aws_appsync_graphqlEndpoint: 'https://fs22dwiqbzdxxocwyckl675lbi.appsync-api.us-east-2.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-2',

  // Set the auth type as "AMAZON_COGNITO_USER_POOLS"
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
