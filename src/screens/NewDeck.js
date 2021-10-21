import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function NewDeck({navigation}) {
  const dispatch = useDispatch();
  const [deckName, setDeckName] = useState('');

  const handleDeckName = deckName => {
    setDeckName(deckName);
    console.log(deckName);
  };
  const handleNewDeckSubmit = () => {
    dispatch({type: 'ADD_NEW_DECK', payload: {title: deckName}});
    navigation.navigate('Decks');
  };
  return (
    <View>
      <View style={style.container}>
        <Text style={style.title}>What is the title of the New Deck</Text>
        <TextInput
          placeholder="Deck Name"
          placeholderTextColor="black"
          onChangeText={handleDeckName}
        />
        <Button
          style={style.button}
          title="Submit"
          onPress={handleNewDeckSubmit}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
