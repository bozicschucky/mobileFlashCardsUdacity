/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from './src/store';
import MainComponent from './src/screens/Index';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <MainComponent />
      </PaperProvider>
    </Provider>
  );
};

export default App;
