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
import DeckDetails from './src/screens/DeckDetails';
import NewCard from './src/screens/NewCard';
import NewDeck from './src/screens/NewDeck';
import Quiz from './src/screens/Quiz';

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
          initialRouteName="Decks"
          screenOptions={ScreenHeaderStyles}>
          <Stack.Screen
            name="Decks"
            component={HomeScreen}
            options={{title: 'Decks'}}
          />
          <Stack.Screen
            name="DeckDetails"
            component={DeckDetails}
            options={{title: 'Deck Details'}}
          />
          <Stack.Screen
            name="NewCard"
            component={NewCard}
            options={{title: 'Add Card'}}
          />
          <Stack.Screen
            name="NewDeck"
            component={NewDeck}
            options={{title: 'Add New Deck'}}
          />
          <Stack.Screen
            name="StartQuiz"
            component={Quiz}
            options={{title: 'Quiz'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
