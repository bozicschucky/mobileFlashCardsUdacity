import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, Button} from 'react-native';
import Deck from '../components/Deck';

export default function HomeScreen({navigation}) {
  const DECKS = useSelector(state => state.decks);
  const decks = Object.values(DECKS);
  const handleDeckNavigation = deck => {
    navigation.navigate('DeckDetails', {title: deck});
  };

  const handleAddNewDeck = () => {
    navigation.navigate('NewDeck');
  };
  return (
    <View>
      <View style={styles.decksContainer}>
        <View style={styles.button}>
          <Button title="Add Deck" onPress={handleAddNewDeck} />
        </View>
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
  button: {
    marginTop: 10,
    marginBottom: 10,
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
