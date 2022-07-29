import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './App.style';
import Logo from './logo.js';
import AppNavigator from './app/app.navigator';

const App = () => {

  return (   
      <PaperProvider theme={theme}>
        <Logo />
        <AppNavigator />
      </PaperProvider>
  );
};

export default App;