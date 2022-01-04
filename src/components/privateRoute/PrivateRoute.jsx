import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Redirect, Route } from 'react-router-dom';

//This will wrap around your Route in App.js to redirect to login if not authenticated
export default function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      //...rest is for all the router props
      //...rest allows you to have infinite arguments as arrays.
      {...rest}
      //location is where we send them back after redirect.
      render={({ location }) => {
        auth.userName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
