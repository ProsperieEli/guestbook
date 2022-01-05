import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './views/Home';
import ProvideContext from './context/ProvideContext';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import Login from './views/login/Login';

export default function App() {
  return (
    <>
      <ProvideContext>
        <Router>
          <Layout />
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </Router>
      </ProvideContext>
    </>
  );
}
