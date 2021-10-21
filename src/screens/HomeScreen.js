import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, Button, FlatList} from 'react-native';
import Deck from '../components/Deck';

export default function HomeScreen({navigation}) {
  const DECKS = useSelector(state => state.decks);
  const decks = Object.values(DECKS);

  const formattedDecksData = decks.map(deck => ({
    ...deck,
    title: deck.title,
    id: Math.random().toString(36),
  }));
  const handleDeckNavigation = deck => {
    navigation.navigate('DeckDetails', {title: deck});
  };

  const handleAddNewDeck = () => {
    navigation.navigate('NewDeck');
  };
  const renderDeck = ({item}) => (
    <Deck
      key={item.id}
      name={item.title}
      cardsNumber={item.questions.length}
      handleDeckNavigation={() => handleDeckNavigation(item.title)}
    />
  );
  return (
    <View>
      <View style={styles.decksContainer}>
        <View style={styles.button}>
          <Button title="Add Deck" onPress={handleAddNewDeck} />
        </View>
        <FlatList data={formattedDecksData} renderItem={renderDeck} />
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
