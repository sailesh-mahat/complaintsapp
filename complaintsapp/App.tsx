import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './App.style';
import Logo from './logo.js';
import AppNavigator from './app/app.navigator';
import { store } from './app/store/store';
import { Provider } from 'react-redux';
import LoadingComponent from './app/components/loading/loading.component';

const App = () => {

  return (   
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Logo />
        <AppNavigator />
        <LoadingComponent />
      </PaperProvider>
    </Provider>

  );
};

export default App;