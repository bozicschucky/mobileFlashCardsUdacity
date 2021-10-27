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
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './src/store';
import MainComponent from './src/screens/Index';

const persistor = persistStore(store);

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
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <MainComponent />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
