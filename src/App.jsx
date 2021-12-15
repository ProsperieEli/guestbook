import React from 'react';
import Header from './components/header/Header';
import Layout from './components/Layout/Layout';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <Layout />
      <Home />;
    </>
  );
}
