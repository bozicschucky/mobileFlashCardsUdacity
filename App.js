/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DeckList from './src/screens/DeckList';
import {NavigationContainer, Button} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
  );
};

const styles = StyleSheet.create({});

export default App;
