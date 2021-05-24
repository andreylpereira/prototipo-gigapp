import React from 'react';
import Routes from './src/pages/Router';
import { AuthProvider } from './src/context/auth';

const App = () => {

  return (
    <>
    <AuthProvider>
      <Routes></Routes>
      </AuthProvider>
    </>
  );
};
export default App;