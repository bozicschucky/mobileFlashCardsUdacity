/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import MainComponent from './src/screens/Index';
const App = () => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;
