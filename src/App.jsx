import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './views/Home';
import ProvideContext from './components/context/ProvideContext';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import { Route } from 'react-router-dom';
import Login from './views/login/Login';

export default function App() {
  return (
    <>
      <ProvideContext>
        <Router>
          <Layout />
          <Switch>
            <Route path="/login" component={<Login />} />
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </Router>
      </ProvideContext>
    </>
  );
}
