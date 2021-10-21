import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  TouchableHighlight,
} from 'react-native';
import Deck from '../components/Deck';

const DECKS = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};
export default function HomeScreen({navigation}) {
  const decks = Object.values(DECKS);
  const handleDeckNavigation = deck => {
    navigation.navigate('DeckList', {title: deck.title});
    console.log('the deck -->', deck);
  };
  return (
    <View>
      <View style={styles.decksContainer}>
        {decks.map((deck, index) => (
          <Deck
            key={index}
            name={deck.title}
            cardsNumber={deck.questions.length}
            handleDeckNavigation={() => handleDeckNavigation(deck.title)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBarContainer: {
    backgroundColor: 'purple',
    height: 50,
  },
  statusTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 40,
    paddingRight: 40,
  },
  decksContainer: {
    // backgroundColor: 'yellow',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
});
