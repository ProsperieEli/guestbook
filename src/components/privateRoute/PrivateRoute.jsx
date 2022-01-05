import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

//This will wrap around your Route in App.js to redirect to login if not authenticated
export function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  console.log(auth.user);
  return (
    <Route
      //...rest is for all the router props
      //...rest allows you to have infinite arguments as arrays.
      {...rest}
      //location is where we send them back after redirect.
      render={({ location }) => {
        //explicit return: if {} you have to return. () are implicite.
        return auth.user ? (
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
