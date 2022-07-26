import React from 'react';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { theme } from './App.style';
import { LoginScreen } from './app/screens/login/login.screen';
import { RegisterScreen } from './app/screens/register/register.screen';
import Logo from './logo.js';

const App = () => {
  return (
      
      <PaperProvider theme={theme}>
        <Logo />
        <LoginScreen />
      </PaperProvider>
     
  );
}

export default App
