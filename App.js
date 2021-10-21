/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/store';
import HomeScreen from './src/screens/HomeScreen';
import DeckList from './src/screens/DeckList';

const Stack = createNativeStackNavigator();

const ScreenHeaderStyles = {
  headerStyle: {
    backgroundColor: '#ed2c2c',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={ScreenHeaderStyles}>
          <Stack.Screen
            name="Decks"
            component={HomeScreen}
            options={{title: 'Decks'}}
          />
          <Stack.Screen
            name="DeckList"
            component={DeckList}
            options={{title: 'DeckList'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
